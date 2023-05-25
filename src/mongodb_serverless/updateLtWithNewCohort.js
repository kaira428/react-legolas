import { connectToMongDB } from "./connectToMongoDB";

export async function updateLtWithNewCohort(ltWithNewCohort) {
  console.log("🚀 ~ file: updateLtWithNewCohort.js:4 ~ updateLtWithNewCohort ~ ltWithNewCohort:", ltWithNewCohort)
  
  let user;
  try {
    user = await connectToMongDB();

    const response = await user.functions.updateLtWithNewCohort(ltWithNewCohort);
      console.log("🚀 ~ file: updateLtWithNewCohort.js:10 ~ updateLtWithNewCohort ~ response:", response)
      
    return response;

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}