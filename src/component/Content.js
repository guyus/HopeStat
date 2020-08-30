import React,{useState,useEffect} from 'react'
import { useRealmApp } from "../realm/RealmApp"
import Care from './Care'
import Box from '@material-ui/core/Box';

export default function Content() {
    const [cares,setCares] = useState([])
    const {user,userinfo} = useRealmApp();

    useEffect(()=>{
        async function getcares() {            
            
            (userinfo.User_id!==undefined)?setCares(await user.functions.caresList(userinfo.User_id,'Care')):setCares([]) 
            console.log(userinfo.User_id) 
        }
        getcares()
    },[])
    //console.log(cares)
    const carelist = cares.map((care,i) => <Box pt={3} key={i}><Care cname={care.Name} key={i} /></Box>)
    return (
        <div>
            {carelist}
        </div>
    )
}
