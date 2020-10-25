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
import { TramOutlined } from '@material-ui/icons';

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
  const {userinfo,logIn,isLoading} = useRealmApp();
  //let lineinfo = {}
  //console.log(app)
  useEffect( () => {
    async function fetchData() {
      //SetIsLineLoading(true)
      const linfo = await checkCredentailLine()
      //if (linfo=='')

      SetLineinfo(linfo)
      console.log('lineinfo app=> '+linfo)
      //logIn({ Line_id:'U83eafec31bf0aa68b8debc67b5e83d9e' })
      await logIn({ Line_id:linfo })
      //SetIsLoading(false) 
    }
    fetchData()
  },[])

  if (!app) {
    return <div>Loading</div>;
  }
  
  const checkCredentailLine = async () => {
    await liff.init({ liffId: '1654364578-prGPRg6j' })
    if (!liff.isLoggedIn()) {
      //SetIsLineLoading(false)
      liff.login()
      
    } else {
      //SetIsLineLoading(true)
    }
    const getProfile = await liff.getProfile()
    return getProfile.userId
  }

  return (userinfo ) ? ( 
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(userinfo)}
      {}
        <Content />
      </Container>  
    </>
      
    ) : (
    (!isLoading)?<LoginScreen lineinfo={lineinfo} />:<div>{console.log('isLoading'+isLoading)}Please Waiting... login Line Account or Click to Logon</div>
      /* <LoginScreen lineinfo={lineinfo} /> */
    )
}