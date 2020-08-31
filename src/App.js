import React, { useState } from 'react'
import RealmApp,{ useRealmApp } from "./realm/RealmApp"
import liff from '@line/liff'
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
  const [lineinfo,SetLineinfo] = useState()
  const app = useRealmApp();
  const {userinfo} = useRealmApp();
  //console.log(app)
  if (!app) {
    return <div>Loading</div>;
  }
  
  const getProfile = async() => {
    //liff.init(async () => {
      let getProfile = await liff.getProfile()
      SetLineinfo({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
        statusMessage: getProfile.statusMessage
      })
    //});
  }
  liff.init({ liffId: '1654364578-QgeLnWaX' }).then(()=>{
    if (!liff.isLoggedIn()) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      liff.login();
    }
  })
  //liff.ready.then(getProfile())
  console.log(userinfo)
  console.log(app.user)
  console.log(lineinfo)
  return (userinfo) ? ( // <StateContext.Provider value={{ state, dispatch }}>
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(userinfo)}
      {}
        <Content />
      </Container>  
    </>
      //</StateContext.Provider>
    ) : (
      <LoginScreen />
    )
}