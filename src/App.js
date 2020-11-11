import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'
import Routes from './Routes'
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from './Actions/user'
import { decode } from "jsonwebtoken";



function App() {
  const dispatch = useDispatch()
  let {token} = useSelector(st => st.user)
  useEffect(() => {
    async function getCurrentUser() {
      try {
        let { username } = decode(token);
        dispatch(getUser(username));
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
