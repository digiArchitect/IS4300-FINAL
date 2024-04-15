import React from 'react';

function SearchFeed() {
  let buttonStyle={
    backgroundColor: '#4f7fcc',
    padding: '7px 25px 7px 25px',
    marginTop: '5px',
    color: 'white',
    float: 'right'
  }
  let inputStyle = {
    height: '30px',
    width: '200px',
    border: '5px solid #00ddff'
  }
  let divStyle = {
    backgroundColor: '#92C7CF',
    paddingBottom: '20px'

  }
  return (
    <div style={divStyle}>
      <input style={inputStyle} type="text" placeholder="Feedback?"/>
      <button style={buttonStyle}>Comment</button>
    </div>
  );
}

export default SearchFeed;

