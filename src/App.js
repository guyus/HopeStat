import React, { useState, useEffect } from 'react'
import RealmApp,{ useRealmApp } from "./realm/RealmApp"
import * as Realm from "realm-web";
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
  const [isLoading,SetIsLoading] = useState()
  const app = useRealmApp();
  const {userinfo,logIn} = useRealmApp();
  //let lineinfo = {}
  //console.log(app)
  useEffect( () => {
    async function fetchData() {
      SetIsLoading(true)
      const linfo = await checkCredentailLine()
      SetLineinfo(linfo)
      console.log('lininfo app=> '+linfo)
      //logIn({ Line_id:'U83eafec31bf0aa68b8debc67b5e83d9e' })
      await logIn({ Line_id:lineinfo })
      SetIsLoading(false) 
    }
    fetchData()
  },[])

  if (!app) {
    return <div>Loading</div>;
  }
  
  const checkCredentailLine = async () => {
    await liff.init({ liffId: '1654364578-prGPRg6j' })
    if (!liff.isLoggedIn()) {
      liff.login()
    }
    const getProfile = await liff.getProfile()
    return getProfile.userId
  }

  return (userinfo && isLoading===false) ? ( 
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(userinfo)}
      {}
        <Content />
      </Container>  
    </>
      
    ) : (
      <LoginScreen lineinfo={lineinfo} />
    )
}