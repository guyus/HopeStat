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
  //console.log(app)
  if (!app) {
    return <div>Loading</div>;
  }
  const d = new Date()  
  const d1 = new Date(d.setDate(d.getDate() - d.getDay()))
  d1.setUTCHours(0,0,0,0);
  return app.user ? ( // <StateContext.Provider value={{ state, dispatch }}>
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(app.user)}{
      
      console.log( d1.toISOString())}
        <Content />
      </Container>  
    </>
      //</StateContext.Provider>
    ) : (
      <LoginScreen />
    )
}