import React from 'react'
import { Container,Typography,Button,TextField } from '@material-ui/core';


export default function LoginScreen() {
    return (
        <Container maxWidth="sm" >
            <form >
            <Typography variant="h6" component="h6">
            ใส่หมายเลจโทรศัพท์
            </Typography>
                <TextField id="standard-basic" label="Standard" type="number"
                    InputLabelProps={{
                    shrink: true,
                }}/>  
                <Button color="inherit">{null}</Button>
            </form>

        </Container>
    )
}
