import React from 'react';
import Post from './Post';

function Feed() {
  let container = {
    border: '2px solid lightblue',
    width: '1200px'
  }
  return (
    <div style={container}>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Claude_Monet%2C_French_-_The_Japanese_Footbridge_and_the_Water_Lily_Pool%2C_Giverny_-_Google_Art_Project.jpg/504px-Claude_Monet%2C_French_-_The_Japanese_Footbridge_and_the_Water_Lily_Pool%2C_Giverny_-_Google_Art_Project.jpg"
      name="By: Claude Monet"
      text="Another entry in my water lilies series! Hoping to do around 250 more. What do you all think of the reflections in the water?"/>
      <Post
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sketch_of_the_Mona_Lisa_by_Raphael.jpg/428px-Sketch_of_the_Mona_Lisa_by_Raphael.jpg"
      name="By: Raffaello Sanzio da Urbino"
      text="A study I did of the Mona Lisa! What do you think? Looking for general crit, how's my linework?"/>
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

export default Feed;