import React from 'react';
import Post from './Post';
import User from './User';
import Comments from './Comments';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Scroll() {
  let container = {
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  
  return (
    <div style={container}>
      <BrowserRouter>
      <Routes>
      <Route path="/User" element={<User/>}  />
      <Route path="/Comments" element={<Comments/>}  />
      </Routes>
      <li> 
        <Link to="user">
      <Post
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg22sPt4a7P9PkRL5yR-eHwvBVaBijOC4c2nIZswrwLw&s"
      name="Bob Dylan"
      text="New album check it out."/>  
      </Link>
       </li>
     
       <li> 
        <Link to="comments">
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sketch_of_the_Mona_Lisa_by_Raphael.jpg/428px-Sketch_of_the_Mona_Lisa_by_Raphael.jpg"
      name="By: Raffaello Sanzio da Urbino"
      text="A study I did of the Mona Lisa! What do you think? Looking for general crit, how's my linework?"/>
      </Link>
       </li>
       </BrowserRouter>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/608px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
      name="By: Vincent van Gogh"
      text="A self portrait I've been working on lately. Looking for thoughts on my brushwork, what do you all think of the colors? Hoping to bring a lot of energy into my work"/>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/619px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
      name="By: Edvard Munch"
      text="One evening I was walking along a path, the city was on one side and the fjord below. I felt tired and ill. I stopped and looked out over the fjord – the sun was setting, and the clouds turning blood red. I sensed a scream passing through nature; it seemed to me that I heard the scream. I painted this picture, painted the clouds as actual blood. The color shrieked. This became The Scream."/>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leonardo_da_vinci%2C_Head_of_a_girl_01.jpg/676px-Leonardo_da_vinci%2C_Head_of_a_girl_01.jpg"
      name="By: Leonardo"
      text="A silverpoint sketch I did yesterday! Looking for thoughts on the expression and the values in the face."/>
    </div>
  );
}

export default Scroll;