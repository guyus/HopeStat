import React from 'react'
import Members from './Members'

import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxhead: {
      flexGrow: 1,
    }
  }));

export default function Care(props) {
    const [isShowMembers,setisShowMembers] = React.useState(0)
    const classes = useStyles();
    //let cname = props.name;
    const handleClick = () => {
        setisShowMembers(!isShowMembers)
        //console.log("in" & isShowMembers.toString)
    }

    return (
        <div>
            <Box p={.5} component="span" border={1} onClick={handleClick} >  {props.name} 
            
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}>Save</Button></Box>
            
              
            {isShowMembers? <Box pl={3}><Members cname={props.name} /></Box>:null}
            
        </div>
    )
}
