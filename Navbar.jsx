import React from 'react';

function Navbar() {
  let floatRight = {
    float: 'right'
  }
  let buttonStyles = {
    padding: '10px 10px 10px 10px',
    backgroundColor: 'white',
    width: '100px'  }
  let searchbarStyles = {
    height: '30px',
    marginRight: '40px',
    paddingLeft: '15px',
    width: '200px'
  }
  let borderRadius = {
    borderRadius: '15px 15px 15px 15px',
    border: '2px solid lightblue'
  }
  return (
    <div>
      <nav>
        <button style={buttonStyles}>Home</button>
        <button style={buttonStyles}>Notifications</button>
        <button style={buttonStyles}>Messages</button>
        <div style={floatRight}>
          <input style={Object.assign({}, searchbarStyles, borderRadius)} type="text" placeholder="Search"/>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Navbar;