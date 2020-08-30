import React from 'react'
import RealmApp,{ useRealmApp } from "./realm/RealmApp"

//import { StateContext } from './contexts'
//import appReducer from './reducers'
//import RealmFunc from './realm/RealmFunc';
import LoginScreen from './component/LoginScreen'
import TopBar from './component/TopBar'
import Content from './component/Content'

import { Container } from '@material-ui/core';

export default function App() {
  return (
      <RealmApp >
        <RequireAuthentication />
      </RealmApp>
  )
}

function RequireAuthentication() {
  //const [ state, dispatch ] = useReducer(appReducer, { user: ''} )
  const app = useRealmApp();
  const {userinfo} = useRealmApp();
  //console.log(app)
  if (!app) {
    return <div>Loading</div>;
  }
  console.log(userinfo)
  console.log(app.user)
  return (userinfo) ? ( // <StateContext.Provider value={{ state, dispatch }}>
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(userinfo)}
        <Content />
      </Container>  
    </>
      //</StateContext.Provider>
    ) : (
      <LoginScreen />
    )
}