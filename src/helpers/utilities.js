import { trainees } from "../data/trainees";

export const traineeDetailsByLtIdByCohortId = (ltId, cohortId) => {
//   console.log(cohortId);
//   console.log(typeof ltId);
//   console.log(typeof cohortId);

  if (typeof ltId === "number") {
    const reqTrainees = trainees.filter((trainee) => {
        // filter for trainees by Learning Track and Cohort IDs
      if (trainee.learningTrack === ltId && trainee.cohort === cohortId) {
        // found required trainee, then compute total module result

        // gather all module results for the identified trainee
        const moduleResults = Object.values(trainee.modules);

        // console.log(moduleResults);

        // compute total score for each of the trainees
        const totalModuleResult = moduleResults.reduce((accumulator, moduleResult, index) => {          
          return accumulator + moduleResult;
        })

        // update total module results to required trainee object
        trainee = {...trainee, 'totalModuleResult': totalModuleResult};

        // console.log(trainee.totalModuleResult);
        return trainee;
      }
    });

    // sort the trainees in descending order of totalModuleResult
    const reqTraineesData = reqTrainees.sort((a, b) => b.totalModuleResult - a.totalModuleResult);

    console.log(reqTraineesData);
    
    return reqTraineesData;
  }
};
