import { connectToMongDB } from "./connectToMongoDB";

export async function getAllLearningTracks() {
  try {
    const user = await connectToMongDB();
    const allLearningTracks = await user.functions.getAllLearningTracks();
    console.log("🚀 ~ file: getAllLearningTracks.js:11 ~ getAllLearningTracks ~ allLearningTracks:", allLearningTracks)

    return allLearningTracks;

  } catch (error) {
    console.error(error);
    return;
  }
}
