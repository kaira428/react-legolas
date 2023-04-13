import courses from "../data/courses";
import { trainees } from "../data/trainees";

export const getLtNameAndCohortIDsForChosenLtId = (ltId) => {
  // Filter for required Learning Track based on LearningTrack ID
  const filteredLearningTracksArray = courses.filter(
    (learningTrack) => learningTrack.id === ltId
  );
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:9 ~ getLtNameAndCohortIDsForChosenLtId ~ filteredLearningTracksArray:", filteredLearningTracksArray)

  const ltName = filteredLearningTracksArray[0].name;
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:12 ~ getLtNameAndCohortIDsForChosenLtId ~ filteredLearningTracksArray: cohorts", filteredLearningTracksArray[0].cohorts)
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:12 ~ getLtNameAndCohortIDsForChosenLtId ~ ltName:", ltName)

  filteredLearningTracksArray[0].cohorts.sort((x, y) => {
    let a = x.cohortNum,
      b = y.cohortNum;
    return a - b;
  });

  const reqSortedCohortIds = [...filteredLearningTracksArray[0].cohorts];

  // compute cohort progress from list in reqSortedCohortIds
  const cohortsProgress = computeCohortProgress(reqSortedCohortIds, trainees);
  
  const result = {
    cohortDetailsList: reqSortedCohortIds,
    ltName: ltName,
    ltId: ltId,
    cohortsProgress: cohortsProgress
  };

  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:21 ~ getLtNameAndCohortIDsForChosenLtId ~ result:", result);

  return result;
};

export const traineeDetailsBySelectedLtIdAndCohortId = (ltId, cohortId) => {
  let traineeDataWithTotalModuleResults = [];

  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:31 ~ traineeDetailsBySelectedLtIdAndCohortId ~ ltId:", ltId)
  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:31 ~ traineeDetailsBySelectedLtIdAndCohortId ~ cohortId:", cohortId)

  // get trainees details for given ltId and cohortId
  trainees.filter((trainee) => {
    // filter for trainees by Learning Track and Cohort IDs
    if (trainee.learningTrack === ltId && trainee.cohort === cohortId) {
      // found required trainee, then compute total module result

      // gather all module results for the identified trainee
      const moduleResults = Object.values(trainee.modules);

      // console.log(moduleResults);

      // compute total score for each of the trainees
      const totalModuleResult = moduleResults.reduce(
        (accumulator, moduleResult, index) => {
          return accumulator + moduleResult;
        }
      );

      // update total module results to required trainee object
      trainee = { ...trainee, totalModuleResult: totalModuleResult };

      traineeDataWithTotalModuleResults = [
        ...traineeDataWithTotalModuleResults,
        trainee,
      ];

      return trainee;
    } else {
      return false;
    }
  });

  // sort the trainees in descending order of totalModuleResult
  const reqTraineesData = traineeDataWithTotalModuleResults.sort(
    (a, b) => b.totalModuleResult - a.totalModuleResult
  );
  // console.log("🚀 ~ file: utilities.js:68 ~ traineeDetailsByLtIdByCohortId ~ reqTraineesData:", reqTraineesData)

  const numberOfTraineesInCohort = reqTraineesData.length; //number of trainees in the required Cohort

  let numberOfModulesForCohort = 0;

  if (numberOfTraineesInCohort > 0) {
    numberOfModulesForCohort = Object.keys(reqTraineesData[0].modules).length; //number of modules in trainee[0]
  }

  // get cohort details for given ltId and cohortId
  const reqCohortsForGivenLtId = courses.filter((course) => course.id === ltId);
  // console.log("🚀 ~ file: utilities.js:72 ~ traineeDetailsByLtIdByCohortId ~ reqCohortsForGivenLtId:", reqCohortsForGivenLtId)

  const partialCohortDetail = reqCohortsForGivenLtId[0].cohorts.filter(
    (cohort) => cohort.cohortNum === cohortId
  );
  // console.log("🚀 ~ file: utilities.js:75 ~ traineeDetailsByLtIdByCohortId ~ reqCohortDetail:", reqCohortDetail[0])

  const reqCohortDetail = {
    numberOfTraineesInCohort,
    numberOfModulesForCohort,
    partialCohortDetails: partialCohortDetail[0],
  };

  // console.log("🚀 ~ file: utilities.js:83 ~ traineeDetailsByLtIdByCohortId ~ reqCohortDetail:", reqCohortDetail);

  const result = { reqTraineesData, reqCohortDetail };

  return result;
};

const computeCohortProgress = (reqCohortIdObj, traineeData) => {
  // console.log(
  //   "🚀 ~ file: supervisorDashboardSliceUtilities.js:106 ~ computeCohortProgress ~ traineeData:",
  //   traineeData
  // );
  // console.log(
  //   "🚀 ~ file: supervisorDashboardSliceUtilities.js:107 ~ computeCohortProgress ~ reqCohortIdObj:",
  //   reqCohortIdObj
  // );

  let reqTraineeArray = [];

  reqCohortIdObj.forEach((cohort) => {
    let found = traineeData.find((trainee) => {
      return trainee.cohort === cohort.cohortNum && trainee.status === "Active";
    });

    reqTraineeArray.push([cohort.cohortNum, found]);
  });

  // console.log(
  //   "🚀 ~ file: supervisorDashboardSliceUtilities.js:118 ~ computeCohortProgress ~ reqTraineeArray:",
  //   reqTraineeArray
  // );

  // compute cohort progress

  let progressData = reqTraineeArray.map(trainee => {
    console.log(trainee[0], trainee[1])
    let progress = 0;

    if (trainee[1] === undefined) {
      // console.log("Undefined trainee data: " + trainee);
      return [trainee[0], progress]
    } else {
      // find number of completed module
      const moduleArray = Object.entries(trainee[1].modules);

      const numberOfCompletedModule = moduleArray.reduce((accum, module) => {
        if (module[1] > 0) {
          return accum + 1; 
        }

        return accum
      }, 0)

      progress = ((numberOfCompletedModule / moduleArray.length) * 100).toFixed(1);

      return [trainee[0], parseInt(progress)]
      
      // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:157 ~ numberOfCompletedModule ~ numberOfCompletedModule:", numberOfCompletedModule)
      // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:149 ~ progressData ~ moduleArray:", moduleArray)
      // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:162 ~ progressData ~ progress:", progress)
    }
    
  })
  console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:146 ~ progressData ~ progressData:", progressData)

  // console.log("🚀 ~ file: supervisorDashboardSliceUtilities.js:127 ~ computeCohortProgress ~ numOfModules:", numOfModules)

  return progressData;
};
