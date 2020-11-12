import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'
import Routes from './Routes'
import {useSelector, useDispatch} from 'react-redux'
import {getUser, logout} from './Actions/user'
import { decode } from "jsonwebtoken";



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
    <div className="App">
    <BrowserRouter>
      <Navbar logout={hanldeLogOut}/>
      <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
