import React from 'react'
import { Container,Typography,Button,TextField } from '@material-ui/core';
import { useRealmApp } from "../realm/RealmApp"

//import * as Realm from "realm-web";

//const REALM_APP_ID = "hopeta-qtsej";
//const REALM_APP_ID = "todo-bpmmo";

//const REALM_APP_ID = "blog-ewnzs";
//const app = new Realm.App({ id: REALM_APP_ID });


export default function LoginScreen() {
    const {logIn} = useRealmApp();
    const [mobile_No,setMobile_No] = React.useState()

    return (
        <Container maxWidth="sm" >
            <form >
            <Typography variant="h6" component="h6">
            ใส่หมายเลขโทรศัพท์
            </Typography>
                <TextField value={mobile_No} onChange={e=>setMobile_No(e.target.value)}
                id="standard-basic" label="xxx-xxxx-xxxx" type="number"
                    InputLabelProps={{
                    shrink: true,
                }}/>  
                <Button name="Mobile_No" color="primary" variant="contained" onClick={ (e)=>logIn({ Mobile_No:e.target.value })}>เข้าสู่ระบบ</Button>
            </form>

        </Container>
    )
}
