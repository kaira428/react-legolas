import courses from "../data/courses";
import { trainees } from "../data/trainees";

export const getCohortIDForSelectedLtId = (ltId, ltData) => {
  // Filter for required Learning Track based on LearningTrack ID
  const filteredLearningTracksArray = ltData.filter(
    (learningTrack) => learningTrack.id === ltId
  );

  // console.log("🚀 ~ file: utilities.js:11 ~ getCohortIDForSelectedLtId ~ filteredLearningTracksArray:", filteredLearningTracksArray)

  const reqSortedData = filteredLearningTracksArray[0].cohorts.sort((x, y) => {
    let a = x.cohortNum,
      b = y.cohortNum;
    return a - b;
  });

  // console.log("🚀 ~ file: utilities.js:18 ~ getCohortIDForSelectedLtId ~ reqSortedData:", reqSortedData)
  const result = { data: reqSortedData, ltId: ltId };

  // console.log(
  //   "🚀 ~ file: utilities.js:21 ~ getCohortIDForSelectedLtId ~ result:",
  //   result
  // );

  return result;
};

export const traineeDetailsByLtIdByCohortId = (ltId, cohortId) => {
  let traineeDataWithTotalModuleResults = [];

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
    const reqCohortsForGivenLtId = courses.filter(course => course.id === ltId)
    // console.log("🚀 ~ file: utilities.js:72 ~ traineeDetailsByLtIdByCohortId ~ reqCohortsForGivenLtId:", reqCohortsForGivenLtId)

    const partialCohortDetail = reqCohortsForGivenLtId[0].cohorts.filter(cohort => cohort.cohortNum === cohortId);
    // console.log("🚀 ~ file: utilities.js:75 ~ traineeDetailsByLtIdByCohortId ~ reqCohortDetail:", reqCohortDetail[0])

    const reqCohortDetail = {numberOfTraineesInCohort, numberOfModulesForCohort, partialCohortDetails: partialCohortDetail[0]};

    // console.log("🚀 ~ file: utilities.js:83 ~ traineeDetailsByLtIdByCohortId ~ reqCohortDetail:", reqCohortDetail);

    const result = {reqTraineesData, reqCohortDetail};

    return result;
  
};