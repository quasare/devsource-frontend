import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import {useSelector, useDispatch} from 'react-redux'
import {getUser, logout} from './Actions/user'
import { decode } from "jsonwebtoken";
import Navigation from './Navigation';

import {ThemeProvider} from 'styled-components'



const theme = {
  main: '#282c34cc',
  txt: '#8F9EA4',
  txt_secondary: '#F2EFF3',
  secondary: '#8D8095',
  bg: '#F2EFF380',
};

function App() {

  const dispatch = useDispatch()
  let token = useSelector(st => st.user.token)
  useEffect(() => {
      try {
        let { username, is_admin } = decode(token);
        dispatch(getUser(username, is_admin, token));
      } catch (err) {
        console.log(err);
      }
  }, [token]);

  const hanldeLogOut = () => {
    dispatch(logout())
  }

  return (
    <div >
    <BrowserRouter>
    
      <ThemeProvider theme={theme} >
      <Navigation logout={hanldeLogOut}/>
      <Routes/>
      </ThemeProvider>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
