import React,{useReducer} from 'react'

import { StateContext } from './contexts'
import appReducer from './reducers'
//import RealmFunc from './realm/RealmFunc';
import Content from './component/Content'
import User from './component/User'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';

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

export default function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: ''} )

  const classes = useStyles();
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
          Hope of Bangkok Stat
          </Typography>
  <Button color="inherit">{null}</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" >
        <Content />
        <User />
      </Container>
    </StateContext.Provider>
  )
}


