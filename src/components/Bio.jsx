import React from 'react';

function Bio(){
  let container={
    marginTop: '15px',
    marginBottom: "50px",
    border: '2px solid #92C7CF',
    width: '296px'
  }
  let text={
    color: 'gray',
    padding: '0 20px 0 20px'
  }
  return(
    <div style={container}>
      <p style={text}>🎸 Folk legend | Poet | Nobel Laureate | "The times they are a-changin'" 🌍 | #DylanLegacy</p>
      <p style={text}>Listen on Spotify: <a href="https://open.spotify.com/artist/74ASZWbe4lXaubB36ztrGX"> My Page</a></p>
    </div>
  );
}

export default Bio;