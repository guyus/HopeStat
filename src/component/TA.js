import React from 'react'
import { useRealmApp } from "../realm/RealmApp"
import Checkbox from '@material-ui/core/Checkbox';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

export default function Ta(props) {
    //const [talist,setTalist] = React.useState([{_id:'',User_id:'',Date:'',isCh:true,isCr:true,isRv:true}])
    const [talist,setTalist] = React.useState({})
    const {user} = useRealmApp();
    //const [ta, setta] = useState(initialState)
    React.useEffect(()=>{
      async function getTa(){
          let [ta] = await user.functions.taList(props.User_id,'2016-01-01')
          setTalist(ta)
      }getTa()
      console.log(talist)
    },[props.User_id, talist, user.functions])
    console.log(talist)
    
    const handleInputChange=(e)=>{
        console.log("before")
        console.log(talist)
        talist[e.target.name]=e.target.checked

        //setTalist(talist)
        setTalist({...talist,[e.target.name]:e.target.checked })
        console.log("after")
        console.log(talist)

    }
    return (
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
    )
}
