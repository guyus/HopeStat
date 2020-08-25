import React,{useEffect} from 'react'
import { useRealmApp } from "../realm/RealmApp"
import Care from './Care'
import Box from '@material-ui/core/Box';

export default function Content() {
    const {user} = useRealmApp();
    let cares = []
/*     const cares = [
        {cname:"PGA1"},
        {cname:"PGA2"}
      ] */
    useEffect(()=>{
        async function getcares() {
            //cares = await user.functions.caresList('5f112b3046adfc2ce00f39c1','Care'); 
            cares = await user.functions.function0('5f112b3046adfc2ce00f39c1'); 
        }
        getcares()
    },[])
    console.log(care.parse)
    const carelist = cares.map((care,i) => <Box pt={3} key={i}><Care name={care.cname} key={i} /></Box>)
    return (
        <div>
            {carelist}
        </div>
    )
}
