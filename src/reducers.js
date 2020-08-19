import * as Realm from "realm-web"


const app = new Realm.App({ id: "hope-stat-mmqrv" });
function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN': 
            login() 
            //break          
        case 'REGISTER':{
            return action.username
            break;
        }            
        case 'LOGOUT':
            return ''; 
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return state
    }
}
  const login = async () => {
        try {
            //setLoading("true");
            const credentials = Realm.Credentials.anonymous();
            const user = await app.logIn(credentials);
            const rst = await user.functions.function0("123")
            console.log(rst);
            //setGuser(user);
        } catch (error) {
            //setLoading("null");
        }
    }
  
  export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action)
    }
  }
  