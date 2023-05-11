import { connectToMongDB } from "./connectToMongoDB";

export async function createNewTrainee(newTrainee) {
  
  let user;
  try {
    user = await connectToMongDB();

    console.log("🚀 ~ file: createNewTrainee.js:4 ~ createNewTrainee ~ newTrainee:", newTrainee);

    const response = await user.functions.createNewTrainee(newTrainee);
    
    return "New Trainee saved";

  } catch (error) {
    console.error(error);
    return;
    
  } finally {
    user.logOut()
  }
}