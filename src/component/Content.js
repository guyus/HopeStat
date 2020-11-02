import React,{useState,useEffect} from 'react'
import { useRealmApp } from "../realm/RealmApp"
import Care from './Care'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { SundayDate } from './Util'

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
    
    const carelist = cares.map((care,i) => <Box pt={3} key={i}><Care cname={care.Name} key={i} /></Box>)
    return (
        <div>
            <Typography variant="h5" ><br />
            สถิติประจำอาทิตย์ที่ : [{SundayDate('str')}]
            </Typography>
            
            {carelist}{console.log('care'+cares)}
        </div>
    )
}
