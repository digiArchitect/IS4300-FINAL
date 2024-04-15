import React from "react";
import Navbar from './Navbar';
import Feed from './Feed'

function App() {
  return (
    <div>
      <Navbar/>
        <div>
          <Feed/>
        </div>
      </div>
  );
}

export default App;