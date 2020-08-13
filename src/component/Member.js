import React from 'react'
import Ta from './Ta'
import { Button,Box } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxhead: {
      flexGrow: 1,
    }
  }));
  

export default function Member(props) {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.boxhead}>{props.mname}  
            <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}>Save</Button></Box>
            <Ta uid = {props.uid} />
        </div>
    )
}
