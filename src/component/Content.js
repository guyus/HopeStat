import React,{useState,useEffect} from 'react'
import { useRealmApp } from "../realm/RealmApp"
import Care from './Care'
import Box from '@material-ui/core/Box';

export default function Content() {
    const [cares,setCares] = useState([])
    const {user} = useRealmApp();
/*     const cares = [
        {cname:"PGA1"},
        {cname:"PGA2"}
      ] */
    useEffect(()=>{
        async function getcares() {
            //cares = await user.functions.caresList('5f112b3046adfc2ce00f39c1','Care'); 
            //user.functions.caresList('5f112b3046adfc2ce00f39c1','Care').then(rst=>setCares(rst))
            setCares(await user.functions.caresList('5f112b3046adfc2ce00f39c1','Care')); 
        }
        getcares()
    },[user.functions])
    console.log(cares)
    const carelist = cares.map((care,i) => <Box pt={3} key={i}><Care cname={care.Name} key={i} /></Box>)
    return (
        <div>
            {carelist}
        </div>
    )
}
