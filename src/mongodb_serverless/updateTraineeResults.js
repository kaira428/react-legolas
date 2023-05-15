import { connectToMongDB } from "./connectToMongoDB";

export async function updateTraineeResults(listOfTrainees) {
  
  let user;
  try {
    user = await connectToMongDB();

    console.log("🚀 ~ file: updateTraineeResults.js:4 ~ updateTraineeResults ~ listOfTrainees:", listOfTrainees)

    const response = await user.functions.updateTraineeResults(listOfTrainees);
    
    console.log("🚀 ~ file: updateTraineeResults.js:12 ~ updateTraineeResults ~ response:", response)
    
    return "Trainee results updated";

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}