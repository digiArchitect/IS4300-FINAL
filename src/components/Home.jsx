import React from "react";

import Scroll from './Scroll';


function Home() {
  let setting = {
    backgroundColor: '#FBF9F1'
  };
  return (
    <div style={setting}>
        <div>
          <Scroll/>
        </div>
      </div>
  );
}

export default Home;