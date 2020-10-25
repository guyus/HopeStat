import React from 'react'
import { Container,Typography,Button,TextField } from '@material-ui/core';
import { useRealmApp } from "../realm/RealmApp"

export default function LoginScreen(props) {
    const {logIn,isLoading} = useRealmApp();
    const [mobile_No,setMobile_No] = React.useState('0941177741')
    //const lineinfo = props.lineinfo
    console.log('lineInfo Loginscreen= '+props.lineinfo)
    return (
        <Container maxWidth="sm" >
            {console.log('isLoading'+isLoading)}
  
            <Typography variant="h6" component="h6">
            ใส่หมายเลขโทรศัพท์
            </Typography>
                <TextField value={mobile_No} onChange={e=>setMobile_No(e.target.value)}
                id="standard-basic" label="xxx-xxxx-xxxx" 
                    InputLabelProps={{
                    shrink: true,
                }}/>  
                <Button name="Mobile_No" color="primary" variant="contained" onClick={ (e)=>logIn({ Mobile_No:mobile_No },props.lineinfo)}>เข้าสู่ระบบ</Button>

        </Container>
    )
}
