import React, {useState} from 'react'
import { useRealmApp } from "../realm/RealmApp"
import { SundayDate } from './Util'

import Checkbox from '@material-ui/core/Checkbox';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

export default function Ta(props) {
    //const [talist,setTalist] = React.useState([{_id:'',User_id:'',Date:'',isCh:true,isCr:true,isRv:true}])
    const [talist,setTalist] = React.useState({isCh:false,isCr:false,isRv:false})
    const [isLoading, setIsLoading] = useState(false)
    
    const {user} = useRealmApp()
    //const [ta, setta] = useState(initialState)
    React.useEffect(()=>{ 
      async function getTa(){
          setIsLoading(true)
          console.log(SundayDate())
          let [ta] = await user.functions.taList(props.member_id,SundayDate())
          //let [ta] = await user.functions.taList('5f112b3046adfc2ce00f39c1','2016-01-01')
          //let ta 
          if(ta===undefined) {
            ta={isCh:false,isCr:false,isRv:false};console.log("in undefined not set")
          }
          setTalist(ta)
      }
      getTa()
      //console.log(talist)
      setIsLoading(false)
      //
    },[])
    //console.log(talist)
    
    const handleInputChange= async (e) => {
        //console.log("before")
        //console.log(talist)
        talist[e.target.name]=e.target.checked
        //setTalist(talist)
        setTalist({...talist,[e.target.name]:e.target.checked })
        const ar = {"User_id":props.member_id, Date: SundayDate()}
        //const dt = {"isCh":false,"isCr":true,"isRv":false}
        //console.log(talist)
        console.log(await user.functions.taSave(ar,talist)) 
        //await user.functions.taSave(ar,dt)
        console.log("after")
        console.log(talist)

    }
    return (
      <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          
          <FormControlLabel
            control={<Checkbox color="primary" name="isCh"
            type="checkbox"
            checked={talist.isCh}
            onChange={handleInputChange}/>}
            label="คจ"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="isCr"
            type="checkbox"
            checked={talist.isCr}
            onChange={handleInputChange}/>}
            label="คร"
            labelPlacement="top"
          />
          <FormControlLabel
            control={<Checkbox color="primary" name="isRv"
            type="checkbox"
            checked={talist.isRv}
            onChange={handleInputChange}/>}
            label="รว"
            labelPlacement="top"
          />
        </div>
      )}
      </>  
    )
}
