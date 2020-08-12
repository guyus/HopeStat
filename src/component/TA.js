import React from 'react'

import Checkbox from '@material-ui/core/Checkbox';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

export default function TA() {

    const [talist,setTalist] = React.useState({isCh:false,isCr:false,isRv:true})
    //let TAs = [{isCh:1,isCr:1,isRv:0}] 
    const handleInputChange=(e)=>{
        let talist1 = talist
        talist1[e.target.name]=e.target.checked
        console.log(talist1)
        setTalist(talist1)
        console.log(talist1.isCh)
    //const handleInputChange = () => 
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
   
        <div>
        <input
            name="isCh"
            type="checkbox"
            checked={talist.isCh}
            onChange={handleInputChange} />
        </div>
  {/*
        <div>
            <input
            name="isCr"
            type="checkbox"
            checked={TA.isCr}
            onChange={handleInputChange} />
        </div>
        <div>
            <input
            name="isRv"
            type="checkbox"
            checked={TA.isRv}
            onChange={handleInputChange} />
        </div> */}
        </div>
    )
}
