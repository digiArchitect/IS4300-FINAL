import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";

import Home from "./Home";
import User from "./User";
import Comments from "./Comments";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Comments" element={<Comments/>} />
        <Route path="/User" element={<User/>} />
      </Routes>
    </Router>
  );
}
  export default App;