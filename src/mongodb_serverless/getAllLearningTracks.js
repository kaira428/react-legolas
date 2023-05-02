import { connectToMongDB } from "./connectToMongoDB";

export async function getAllLearningTracks() {
  let user;
  try {
    user = await connectToMongDB();
    const allLearningTracks = await user.functions.getAllLearningTracks();
    
    return allLearningTracks;

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}
