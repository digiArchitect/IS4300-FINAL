import React from 'react';
import Post from './Post';
import FriendList  from './FriendList';


function Comments() {
  let container = {
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  let comments = {
    marginTop: "-100px",
  }
  
  return (
    <div style={container}>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sketch_of_the_Mona_Lisa_by_Raphael.jpg/428px-Sketch_of_the_Mona_Lisa_by_Raphael.jpg"
      name="By: Raffaello Sanzio da Urbino"
      text="A study I did of the Mona Lisa! What do you think? Looking for general crit, how's my linework?"/>
      <FriendList style={comments} />
    </div>
  );
}

export default Comments;