import React from 'react'
import Members from './Members'

import Box from '@material-ui/core/Box'

export default function Care(props) {
    const [isShowMembers,setisShowMembers] = React.useState(0)
    //let cname = props.name;
    const handleClick = () => {
        setisShowMembers(!isShowMembers)
        console.log("in" & isShowMembers.toString)
    }

    return (
        <div>
            <Box p={.5} component="span" border={1} onClick={handleClick} >  {props.name} </Box><br/>  
            {isShowMembers? <Box pl={3}><Members cname={props.name} /></Box>:null}
            
            <span>{ null}</span>   
        </div>
    )
}
