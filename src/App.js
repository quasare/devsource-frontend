import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navigation'
import Routes from './Routes'
import {useSelector, useDispatch} from 'react-redux'
import {getUser, logout} from './Actions/user'
import { decode } from "jsonwebtoken";
import BootstrapProvider from '@bootstrap-styled/provider';
import Navigation from './Navigation';
import {Container} from '@bootstrap-styled/v4'

const theme = {
  main: '2C2D30',
  txt: '8F9EA4',
  secondary: '8D8095',
  bg: 'F2EFF3'
};

function App() {

  const dispatch = useDispatch()
  let token = useSelector(st => st.user.token)
  useEffect(() => {
    
      try {
        let { username, isAdmin } = decode(token);
        dispatch(getUser(username, isAdmin));
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
    <BootstrapProvider theme ={theme}>
      <Container>
      <Navigation logout={hanldeLogOut}/>
      <Routes/>
      </Container>
      </BootstrapProvider>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
