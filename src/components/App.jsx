import React from "react";
import Navbar from './Navbar';
import Scroll from './Scroll';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from './User';

function App() {
  let setting = {
    backgroundColor: '#FBF9F1'
  };
  return (
    <div style={setting}>
      <Navbar/>
        <div>
          <Scroll/>
        </div>
      </div>
  );
}

export default App;