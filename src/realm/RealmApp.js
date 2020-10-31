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
  const [isLoading,SetIsLoading] = React.useState()

  React.useEffect(() => {
    setUser(app.currentUser);
  }, [appRef.current.currentUser]);
  //}, [appRef.current.currentUser]);
  
  // Let new users register an account
  const registerUser = async (email, password) => {
    return await app.emailPasswordAuth.registerUser(email, password);
  }
  
  // Let registered users log in
  const logIn = async (filter,saveData) => {
    SetIsLoading(true)
    //const credentials = Realm.Credentials.emailPassword(email, password);
    console.log('logIn:lineinfo '+ JSON.stringify(filter))
    console.log(filter)
    //const credentials = Realm.Credentials.anonymous()
    const credentials = Realm.Credentials.function(filter)
    //console.log(app.credentials)
    try{
      await app.logIn(credentials)
      console.log('saveData '+JSON.stringify(saveData) + app.currentUser)
      setUser(app.currentUser)
      if (app.currentUser)
        setUserinfo(await app.currentUser.functions.userSave(filter,saveData))
    }catch(err){
      console.log('app:login '+ err)
    }

    //setUser(app.currentUser)
    //const {muser_id} = await app.currentUser.functions.function0('Sys_id')
    
    /* (my_id===undefined)?(setUserinfo(my_id)
    ):(
      setUserinfo()
      //console.log("keepin "+ my_id.User_id)
    ) */
    console.log("keepin "+ userinfo)
    SetIsLoading(false)
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
    isLoading: isLoading,
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