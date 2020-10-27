import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'

// import NavBar from "./NavBar";
// import Routes from "./Routes";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
  </BrowserRouter>
    </div>
  );
}

export default App;
