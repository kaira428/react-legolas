import { connectToMongDB } from "./connectToMongoDB";

export async function createNewLearningTrack(newLt) {
  let user;
  try {
    user = await connectToMongDB();
    const response = await user.functions.createNewLearningTrack(newLt);
    
    return response;

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}