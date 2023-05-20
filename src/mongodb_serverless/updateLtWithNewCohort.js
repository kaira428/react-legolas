import { connectToMongDB } from "./connectToMongoDB";

export async function updateLtWithNewCohort(ltWithNewCohort) {
  
  let user;
  try {
    user = await connectToMongDB();

    const response = await user.functions.updateLtWithNewCohort(ltWithNewCohort);
      
    return response;

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}