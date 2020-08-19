import React,{useEffect} from 'react';
import * as Realm from "realm-web"

const RealmFunc = () => {
    const [guser, setGuser] = React.useState();
    const credentials = Realm.Credentials.anonymous();
    const app = new Realm.App({ id: "hope-stat-mmqrv" });
  // Authenticate the user
    React.useEffect(() => {
        async function login() {
            try {
                //setLoading("true");
                const user = await app.logIn(credentials);
                const rst = await user.functions.function0("123")
                console.log(rst);
                setGuser(user);
            } catch (error) {
                //setLoading("null");
            }
        }
        login()},[]);
    return (
        <div>
            {null}
        </div>
    );
}

export default RealmFunc;
