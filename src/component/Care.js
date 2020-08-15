import React from 'react'
import Members from './Members'

import Box from '@material-ui/core/Box'
import { Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    boxhead: {
      flexGrow: 1, paddingLeft:10, paddingTop:3
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
            <Box component="div" display="flex" boxShadow={1}   >
                <Typography variant="h6" className={classes.boxhead} onClick={handleClick}>{props.name} </Typography>
                {isShowMembers? <Button size="small" startIcon={<SaveIcon />}>Save</Button>:null}
            </Box>
            
            
              
            {isShowMembers? <Box pl={5} pt={1}><Members cname={props.name} /></Box>:null}
            
        </div>
    )
}
