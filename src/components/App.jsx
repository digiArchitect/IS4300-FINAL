import React from "react";
import Navbar from './Navbar';
import Scroll from './Scroll';

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