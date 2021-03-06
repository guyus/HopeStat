import React, { useState, useEffect } from 'react'
import RealmApp,{ useRealmApp } from "./realm/RealmApp"
//import * as Realm from "realm-web";
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
  
  
  const app = useRealmApp();
  const {userinfo,logIn,isLoading} = useRealmApp();
  let line_email
  //let lineinfo = {}
  //console.log(app)
  useEffect( () => {
    async function fetchData() {
      const linfo = await checkCredentailLine()
      SetLineinfo((linfo))
      //console.log('lineinfo app=> '+lineinfo)
      if(linfo.userId!==null)
        await logIn({ Line_id:linfo.userId })
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
      line_email = liff.getDecodedIDToken().email
      console.log('line_email'+line_email)
      return getProfile
    } catch(err){
      console.log('app:checkLine '+ err);
      return null
    }
  }
  const Loading = () =>{
    return <Box m={5} color="warning" >
      <Typography variant="h5">Loading... กำลังเข้าสู่ระบบ กรุณารอสักครู่</Typography>
      </Box>
  }

  return (userinfo ) ? ( 
    <>
      <TopBar />
      <Container maxWidth="sm" >
      {console.log(userinfo)}
        <Content />
      </Container>  
    </>
    ) : (
    (!isLoading)?<LoginScreen {...lineinfo}  line_email={line_email} />:<div>{console.log('isLoading'+isLoading)}<Loading /></div>
      /* <LoginScreen lineinfo={lineinfo} /> */
    )
}