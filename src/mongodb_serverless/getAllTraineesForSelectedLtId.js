import { connectToMongDB } from "./connectToMongoDB";

export async function getAllTraineesForSelectedLtId(ltId) {
  console.log("🚀 ~ file: getAllTraineesForSelectedLtId.js:4 ~ getAllTraineesForSelectedLtId ~ ltId:", ltId)
  
  let user;
 
  try {
    user = await connectToMongDB();
   
    const allTraineesForLtId = await user.functions.getSelectedLtIdTrainees(
      ltId
    );
    console.log("🚀 ~ file: getAllTraineesForSelectedLtId.js:13 ~ getAllTraineesForSelectedLtId ~ allTraineesForLtId:", allTraineesForLtId)

    return allTraineesForLtId;

  } catch (error) {
    console.error(error);
    return;

  } finally {
    user.logOut();
  }
}
