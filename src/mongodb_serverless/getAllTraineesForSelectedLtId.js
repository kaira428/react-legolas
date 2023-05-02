import { connectToMongDB } from "./connectToMongoDB";

export async function getAllTraineesForSelectedLtId(ltId) {
  
  let user;
 
  try {
    user = await connectToMongDB();
   
    const allTraineesForLtId = await user.functions.getSelectedLtIdTrainees(
      ltId
    );

    return allTraineesForLtId;

  } catch (error) {
    console.error(error);
    return;

  } finally {
    user.logOut();
  }
}
