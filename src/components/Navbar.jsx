import React from 'react';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  let floatRight = {
    float: 'right'
  }
  let navColor ={
    backgroundColor:  '#FBF9F1'
  }
  let buttonStyles = {
    padding: '10px 10px 10px 10px',
    backgroundColor:  '#FBF9F1',
    width: '100px'
  }
  let searchbarStyles = {
    height: '30px',
    marginRight: '40px',
    paddingLeft: '15px',
    width: '200px',
    backgroundColor:  '#FBF9F1'
  }
  let borderRadius = {
    borderRadius: '15px',
    border: '2px solid #34abef'
  }

  return (
    <BrowserRouter>
      <div>
        <nav style={navColor}>
          <Link to="app">
            <button style={buttonStyles}>Home</button>
          </Link>
          <Routes>
            <Route path="/App" element={<App />} />
          </Routes>
          <div style={floatRight}>
            <input style={Object.assign({}, searchbarStyles, borderRadius)} type="text" placeholder="Search"/>
            <button style={Object.assign({}, buttonStyles, borderRadius)}>Tweet</button>
          </div>
        </nav>
        <hr/>
      </div>
    </BrowserRouter> 
  );
}

export default Navbar;
