import { connectToMongDB } from "./connectToMongoDB";

export async function getCohortTraineesForSelectedCohortNum(cohortNum) {
  
  let user;

  try {
    user = await connectToMongDB();
    // const cohortTrainees = await user.functions.getAllLearningTracks();
    const cohortTrainees = await user.functions.getSelectedCohortTrainees(
      cohortNum
    );

    return cohortTrainees;
    
  } catch (error) {
    console.error(error);
    return;

  } finally {
    user.logOut();
  }
}
