import { connectToMongDB } from "./connectToMongoDB";

export async function getAllCoachesAndMentors() {
  let user;
  try {
    user = await connectToMongDB();
    const coachesAndMentorsList = await user.functions.getAllCoachesAndMentors();

    console.log("🚀 ~ file: getAllCoachesAndMentors.js:8 ~ getAllCoachesAndMentors ~ coachesAndMentorsList:", coachesAndMentorsList)

    return coachesAndMentorsList;

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}