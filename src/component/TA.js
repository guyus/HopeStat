import React from 'react'

import Checkbox from '@material-ui/core/Checkbox';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; 

export default function Ta() {
    const [talist,setTalist] = React.useState({})
    const handleInputChange=(e)=>{
        console.log("before")
        console.log(talist)
        talist[e.target.name]=e.target.checked

        setTalist(talist)
        //setTalist({...talist,[e.target.name]:e.target.checked })
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
