import * as React from "react";
import * as Realm from "realm-web";

const REALM_APP_ID = "hope-stat-mmqrv";
const app = new Realm.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext(undefined);

const RealmApp = ({ children }) => {
  // Keep track of the current user in local state
  //const appRef = React.useRef(app);
  const [user, setUser] = React.useState(app.currentUser);
  React.useEffect(() => {
    setUser(app.currentUser);
  }, [user]);
  //}, [appRef.current.currentUser]);
  
  // Let new users register an account
  const registerUser = async (email, password) => {
    return await app.emailPasswordAuth.registerUser(email, password);
  }
  
  // Let registered users log in
  const logIn = async (email, password) => {
    //const credentials = Realm.Credentials.emailPassword(email, password);
    const credentials = Realm.Credentials.anonymous();
    await app.logIn(credentials);
    console.log(app)
    setUser(app.currentUser);
  }
  
  // Let logged in users log out
  const logOut = async () => {
    await app.currentUser?.logOut();
    setUser('');
  }
  
  // Provide the current user and authentication methods to the wrapped tree
  const context = {
    id: REALM_APP_ID,
    user,
    logIn,
    logOut,
    registerUser,
  };
  return (
    <RealmAppContext.Provider value={context}>
      {children}
    </RealmAppContext.Provider>
  );
};
export default RealmApp;

export const useRealmApp = () => {
  const app = React.useContext(RealmAppContext);
  if (!app) {
    throw new Error("You must call useRealmApp() inside of a <RealmApp />.");
  }
  return app;
};