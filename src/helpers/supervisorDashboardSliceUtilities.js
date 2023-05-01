export const getLtNameAndCohortIDsForChosenLtId = (
  selectedLearningTrackInfo, trainees
) => {
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:6 ~ trainees:", trainees)
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:7 ~ selectedLearningTrackInfo:", selectedLearningTrackInfo)
  
  const ltName = selectedLearningTrackInfo.name;

  const reqSortedCohortIds = [...selectedLearningTrackInfo.cohorts];

  // compute cohort progress from list in reqSortedCohortIds
  const cohortsProgress = computeCohortProgress(reqSortedCohortIds, trainees);

  const result = {
    cohortDetailsList: reqSortedCohortIds,
    ltName: ltName,
    ltId: selectedLearningTrackInfo._id,
    cohortsProgress: cohortsProgress,
  };

  return result;
};

export const traineeDetailsBySelectedLtIdAndCohortId = (data) => {
  let traineeDataWithTotalModuleResults = [];
  let trainingStatus = "In Progress";

  let traineeList = [...data];;

  // get trainees details for given ltId and cohortId
  traineeList.filter((trainee) => {

      // gather all module results for the identified trainee
      const moduleResults = Object.values(trainee.modules);

      // compute total score for each of the trainees
      const totalModuleResult = moduleResults.reduce(
        (accumulator, moduleResult, index) => {
          return accumulator + moduleResult;
        }
      );
      // compute trainee training progress status (either 'In Progress' or 'Completed' or 'Withdrawn')

      if (trainee.status === "InActive") {
        trainee.progress = "Withdrawn";
      } else {
        const modulesArray = Object.entries(trainee.modules);

        // check if all modules are completed; ie result in module > 0
        const trainingCompleted = modulesArray.every((module) => module[1] > 0);
        let numberOfCompletedModules = 0;

        if (trainingCompleted) {
          trainee.progress = 100;
          trainingStatus = "Completed";
        } else {
          modulesArray.forEach((module) => {
            if (module[1] > 0) {
              numberOfCompletedModules += 1;
            }

            trainee.progress = (
              (numberOfCompletedModules / modulesArray.length) *
              100
            ).toFixed(0);
          });
        }
      }

      // update total module results to required trainee object
      trainee = { ...trainee, totalModuleResult: totalModuleResult.toFixed(1) };

      traineeDataWithTotalModuleResults = [
        ...traineeDataWithTotalModuleResults,
        trainee,
      ];

      return trainee;
    // } else {
    //   return false;
    // }
  });

  // sort the trainees in descending order of totalModuleResult
  traineeDataWithTotalModuleResults.sort(
    (a, b) => b.totalModuleResult - a.totalModuleResult
  );
  const numberOfTraineesInCohort = traineeDataWithTotalModuleResults.length; //number of trainees in the required Cohort

  let numberOfModulesForCohort = 0;

  if (numberOfTraineesInCohort > 0) {
    numberOfModulesForCohort = Object.keys(traineeDataWithTotalModuleResults[0].modules).length; //number of modules in trainee[0]
  }

  // get cohort details for given ltId and cohortId
  // const reqCohortsForGivenLtId = courses.filter((course) => course.id === ltId);
  // const partialCohortDetail = reqCohortsForGivenLtId[0].cohorts.filter(
  //   (cohort) => cohort.cohortNum === cohortId
  // );
  const reqCohortDetail = {
    numberOfTraineesInCohort,
    numberOfModulesForCohort,
    // partialCohortDetails: partialCohortDetail[0],
  };
  const result = { traineeDataWithTotalModuleResults, reqCohortDetail, trainingStatus};

  return result;
};

const computeCohortProgress = (reqCohortIdObj, traineeData) => {
  let reqTraineeArray = [];

  reqCohortIdObj.forEach((cohort) => {
    let found = traineeData.find((trainee) => {
      return (
        trainee.cohort === cohort.cohortNum && trainee.status !== "InActive"
      );
    });

    reqTraineeArray.push([cohort.cohortNum, found]);
  });

  // compute cohort progress

  let progressData = reqTraineeArray.map((trainee) => {
    // console.log(trainee[0], trainee[1]);
    let progress = 0;

    if (trainee[1] === undefined) {
      // console.log("Undefined trainee data: " + trainee);
      return [trainee[0], progress];
    } else {
      // find number of completed module
      const moduleArray = Object.entries(trainee[1].modules);

      const numberOfCompletedModule = moduleArray.reduce((accum, module) => {
        if (module[1] > 0) {
          return accum + 1;
        }

        return accum;
      }, 0);

      progress = ((numberOfCompletedModule / moduleArray.length) * 100).toFixed(
        0
      );

      return [trainee[0], parseInt(progress)];
    }
  });

  return progressData;
};
