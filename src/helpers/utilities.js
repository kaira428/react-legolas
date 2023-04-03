import { trainees } from "../data/trainees";

export const getCohortIDForSelectedLtId = (ltId, ltData) => {
  // console.log("🚀 ~ file: utilities.js:4 ~ getCohortIDForSelectedLtId ~ ltId:", ltId)

  // console.log("🚀 ~ file: utilities.js:4 ~ getCohortIDForSelectedLtId ~ ltData:", ltData)

  // Filter for required Learning Track based on LearningTrack ID
  const filteredLearningTracksArray = ltData.filter(
    (learningTrack) => learningTrack.id === ltId);

  const reqSortedData = filteredLearningTracksArray[0].cohorts
    .sort((x, y) => {
      let a = x.cohortNum,
        b = y.cohortNum;
      return a - b;
    });

    // console.log("🚀 ~ file: utilities.js:18 ~ getCohortIDForSelectedLtId ~ reqSortedData:", reqSortedData)
  
    return reqSortedData;
};
    
export const traineeDetailsByLtIdByCohortId = (ltId, cohortId) => {
  //   console.log(cohortId);
  //   console.log(typeof ltId);
  //   console.log(typeof cohortId);

  let traineesWithTotalModuleResult = [];

  if (typeof ltId === "number") {
    const reqTrainees = trainees.filter((trainee) => {
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

        // console.log(trainee);
        traineesWithTotalModuleResult.push(trainee);

        return trainee;
      }
    });

    // sort the trainees in descending order of totalModuleResult
    const reqTraineesData = traineesWithTotalModuleResult.sort(
      (a, b) => b.totalModuleResult - a.totalModuleResult
    );

    // console.log(reqTraineesData);

    return reqTraineesData;
  }
};
