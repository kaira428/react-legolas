import { connectToMongDB } from "./connectToMongoDB";

export async function getCohortTraineesForSelectedCohortNum(cohortNum) {
  console.log(
    "🚀 ~ file: getCohortTraineesForSelectedCohortNum.js:4 ~ getCohortTraineesForSelectedCohortNum ~ cohortNum:",
    cohortNum
  );
  let user;

  try {
    user = await connectToMongDB();
    // const cohortTrainees = await user.functions.getAllLearningTracks();
    const cohortTrainees = await user.functions.getSelectedCohortTrainees(
      cohortNum
    );

    console.log(
      "🚀 ~ file: getCohortTraineesForSelectedCohortNum.js:7 ~ getCohortTraineesForSelectedCohortNum ~ cohortTrainees:",
      cohortTrainees
    );

    return cohortTrainees;
    
  } catch (error) {
    console.error(error);
    return;

  } finally {
    user.logOut();
  }
}
