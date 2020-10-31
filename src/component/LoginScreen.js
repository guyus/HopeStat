import React from 'react'
import { Container,Typography,Button,TextField } from '@material-ui/core';
import { useRealmApp } from "../realm/RealmApp"

export default function LoginScreen(props) {
    const {logIn} = useRealmApp()
    const [mobile_No,setMobile_No] = React.useState('')
    //const {userId,DisplayName,z} = props
    //console.log('lineInfo Loginscreen= '+props+' '+JSON.stringify(props)+' '+props.displayName)
    const lineSave = {Line_id:props.userId, Line_display:props.displayName, Line_pic:props.pictureUrl}
    console.log('lineInfo Loginscreen= '+JSON.stringify(lineSave))
    const handleValidation = (m,d)=>{
        if (m.Mobile_No!==''){
            logIn(m,d)
        }else{
            alert('ใส่ข้อมูลด้วยครับ')
        }
    }
    return (
        <Container maxWidth="sm" >
            {/* {console.log('isLoading'+isLoading)} */}
            <Typography variant="h6" component="h6">
            Line Name: {props.displayName} <br />Line Id: {props.userId}<br />Line Email: {props.line_email}<br />
            </Typography>
            <Typography variant="h6" component="h6">
            ใส่หมายเลขโทรศัพท์
            </Typography>
                <TextField value={mobile_No} onChange={e=>setMobile_No(e.target.value)}
                id="standard-basic" label="xxx-xxxx-xxxx" 
                    InputLabelProps={{
                    shrink: true,
                }}/>  
                <Button name="Mobile_No" color="primary" variant="contained" onClick={ (e)=>handleValidation({ Mobile_No:mobile_No },lineSave)}>เข้าสู่ระบบ</Button>

        </Container>
    )
}
