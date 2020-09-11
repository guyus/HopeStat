import * as React from "react";
import * as Realm from "realm-web";

const REALM_APP_ID = "hopeta-qtsej";
//const REALM_APP_ID = "todo-bpmmo";

//const REALM_APP_ID = "blog-ewnzs";
const app = new Realm.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext(undefined);

const RealmApp = ({ children }) => {
  // Keep track of the current user in local state
  
  const appRef = React.useRef(app);
  
  const [user, setUser] = React.useState();
  const [userinfo, setUserinfo] = React.useState();

  React.useEffect(() => {
    setUser(app.currentUser);
  }, [appRef.current.currentUser]);
  //}, [appRef.current.currentUser]);
  
  // Let new users register an account
  const registerUser = async (email, password) => {
    return await app.emailPasswordAuth.registerUser(email, password);
  }
  
  // Let registered users log in
  const logIn = async (filter,lineinfo) => {
    //const credentials = Realm.Credentials.emailPassword(email, password);
    console.log('logIn:lineinfo '+ filter)
    console.log(filter)
    //const credentials = Realm.Credentials.anonymous()
    const credentials = Realm.Credentials.function(filter)
    //console.log(app.credentials)
    await app.logIn(credentials)
    console.log(app.currentUser)
    setUser(app.currentUser)
    const Sys_id = {Sys_id:app.currentUser._id,Line_id:lineinfo}
    console.log(Sys_id)
    if (app.currentUser)
      setUserinfo(await app.currentUser.functions.userSave(filter,Sys_id))

    console.log("logIn:keepin "+ userinfo)
  }
  
  // Let logged in users log out
  const logOut = async () => {
    await app.currentUser?.logOut()
    setUser('')
    setUserinfo('')
  }
  
  // Provide the current user and authentication methods to the wrapped tree
  const context = {
    id: REALM_APP_ID,
    userinfo: userinfo,
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