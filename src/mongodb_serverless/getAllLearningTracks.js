import * as Realm from "realm-web";

export async function getAllLearningTracks() {
  const REALM_APP_ID = process.env.REACT_APP_PUBLIC_REALM_APP_ID; //must start with REACT_APP...
  // const REALM_APP_ID = "legolas2-rolnn";
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();

  // console.log("🚀 ~ file: getAllLearningTracks.js:5 ~ getAllLearningTracks ~ REALM_APP_ID:", REALM_APP_ID);

  try {
    const user = await app.logIn(credentials);
    const allLearningTracks = await user.functions.getAllLearningTracks();
    // console.log("🚀 ~ file: getAllLearningTracks.js:11 ~ getAllLearningTracks ~ allLearningTracks:", allLearningTracks)
    return allLearningTracks;

  } catch (error) {
    console.error(error);
    return;
  }
}
