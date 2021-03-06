import React from 'react'
import { useRealmApp } from "../realm/RealmApp"


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function TopBar() {
    const {userinfo,logOut} = useRealmApp();
    const classes = useStyles();

    const d = new Date()  
    const sunDate = new Date(d.setDate(d.getDate() - d.getDay()))
    sunDate.setUTCHours(0,0,0,0);
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Hope of Bangkok Stat
          </Typography>
            <Avatar alt={userinfo.Name} src={userinfo.Line_pic} />
            <Button color="inherit" onClick={e=>logOut()}>{userinfo.Name}</Button>
            <Button color="inherit" onClick={e=>logOut()}>Logout</Button>
        </Toolbar>
      </AppBar>
    )
}
