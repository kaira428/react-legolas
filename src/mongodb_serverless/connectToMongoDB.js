import * as Realm from "realm-web";

export const connectToMongDB = async () => {
  const REALM_APP_ID = process.env.REACT_APP_PUBLIC_REALM_APP_ID; //must start with REACT_APP...
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();

  const user =  await app.logIn(credentials);

  return user;
};
