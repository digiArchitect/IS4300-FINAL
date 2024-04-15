import React from 'react';

function Badge() {

  let blue = {
    backgroundColor: '#34abef',
    height: '300px',
    background: 'URL("https://i.imgur.com/7MVqXLI.jpeg")',
  

  }
  let container = {
    width: '300px',
    height: '300px',
    marginBottom: '100px',
    backgroundColor: '#92C7CF'
  }
  let nameFloat={
    float: 'left',
    marginBottom: '0',
    color: '#48CA84'
  }
  let paddingAll = {
    padding: '0 20px 0 20px',
    border: '5px solid #92C7CF '
    

  }
  let wordsColor={
    color: 'blue'
  }
  return (
    <div style={container}>
      <div style={blue}>

      </div>
      <div style={paddingAll}>
        <h3 style={nameFloat}>Bob Dylan</h3>
        <br/>
        <h5><a href="#home" style={wordsColor}>FOLLOWING</a> &nbsp; <a href="#home" style={wordsColor}>FOLLOWERS</a></h5>

      </div>
    </div>
  );
}

export default Badge;