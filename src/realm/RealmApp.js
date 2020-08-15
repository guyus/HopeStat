import React from 'react'



import * as Realm from "realm-web";
//const Realm = require("realm");

 export default function callFunction0() {
    const logonuser = async() => {
        const app = new Realm.App({ id: "hope-stat-mmqrv" });
        //const app = new Realm.App(appConfig);
        // Create an anonymous credential
        const credentials = Realm.Credentials.anonymous();

        try {
        // Authenticate the user
            const user = await app.logIn(credentials);
            const resultOfCallFunction = await user.functions.function0("1");
            console.log(resultOfCallFunction)
            return resultOfCallFunction
        } catch(err) {
            console.error("Failed to log in", err);
        }
    }
    return <button onClick={logonuser}>Log In</button>; 

     //const resultOfCallFunction = await user.callFunction("sum", myArgs); // alternate syntax to call a MongoDB Realm Function

     

     //console.log(`Using the "callFunction()" method: the sum of ${numA} + ${numB} = ${resultOfCallFunction}`);

}
 //run().catch(console.dir);