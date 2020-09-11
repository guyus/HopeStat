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

import { Container,Typography,Box } from '@material-ui/core';

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
  const [isLoading,SetIsLoading] = useState(true)
  const app = useRealmApp();
  const {userinfo,logIn} = useRealmApp();
  //let lineinfo = {}
  //console.log(app)
  useEffect( () => {
    async function fetchData() {
      SetIsLoading(true)
      const linfo = await checkCredentailLine()
      SetLineinfo(linfo)
      //SetLineinfo({ Line_id:linfo })
      console.log('app:lininfo => '+lineinfo)

      try{
        await logIn({ Line_id:linfo },linfo)
      } catch(err){
        SetIsLoading(true) 
        console.log('app:fetchData '+err);
      }
      SetIsLoading(false) 
      console.log('loading = ' + isLoading)
    }
    fetchData()
  },[])

  if (!app) {
    return <div>Loading</div>;
  }

  const checkCredentailLine = async () => {
    try{
      await liff.init({ liffId: '1654364578-prGPRg6j' })
      if (!liff.isLoggedIn()) {
        liff.login()
      }
      const getProfile = await liff.getProfile()
      return getProfile.userId
    } catch(err){
      console.log('app:checkLine '+ err);
      return null
    }
  }

  const Loading = () =>{
    return <Box m={2} color="warning" >
      <Typography variant="h5">Loading... กำลังเข้าสู่ระบบ กรุณารอสักครู่</Typography>
      </Box>
  }

  return (
    (!isLoading) ? ( 
      (userinfo) ? ( 
      <>
        <TopBar />
        <Container maxWidth="sm" >
        {console.log('app:userinfo '+JSON.stringify(userinfo))}
        {console.log('app:isLoading '+isLoading)}
          <Content />
        </Container>  
      </>
        
      ) : (
        <LoginScreen lineinfo={lineinfo} />
      )
    ) : (
      <Loading />
    )
  )
}