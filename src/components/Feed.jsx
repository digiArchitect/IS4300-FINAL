import React from 'react';
import SearchFeed from './SearchFeed';
import Post from './Post';

function Feed() {
  let container = {
    width: '500px',
    backgroundColor: '#FBF9F1'
  }
  let headText ={
    marginLeft: '200px',
    color: "#92C7CF"
  }
  return (

    <div style={container}>
      <div>
      <h1 style={headText}>My Art</h1>
    </div>
      <a href="https://open.spotify.com/album/4NP1rhnsPdYpnyJP0p0k0L?si=ZRrEY2j9RfuLKiwbDlwItQ">
      <Post
      img="https://upload.wikimedia.org/wikipedia/en/3/38/Bob_Dylan_-_Blonde_on_Blonde.jpg"
      name="Blonde on Blonde"
      text="New album, don't think twice check it out."/>
      </a>
      <a href="https://open.spotify.com/album/0o1uFxZ1VTviqvNaYkTJek?si=C3xGIlPVRfOxe-4_Q5LLhw">
      <Post
      img="https://upload.wikimedia.org/wikipedia/en/d/d6/Bob_Dylan_-_The_Freewheelin%27_Bob_Dylan.jpg"
      name="The Freewheelin' Bob Dylan"
      text="I'm freeeeeeweelin."/>
      </a>
      <a href="https://open.spotify.com/album/4WD4pslu83FF6oMa1e19mF?si=wxBEi5ogToWkBBnwncSpOQ">
      <Post
      img="https://upload.wikimedia.org/wikipedia/en/f/fa/Bob_Dylan_-_Blood_on_the_Tracks.jpg"
      name="Blood on the Tracks"
      text="If you don't like my new sound, it's not my problem."/>
      </a>
      
      <a href="https://open.spotify.com/album/5WBx64FIN04CvM2T1MGrUN?si=94mVEKsrQDOwKO9XPJcKzg">
      <Post
      img="https://upload.wikimedia.org/wikipedia/en/9/93/Bob_Dylan_-_Nashville_Skyline.jpg"
      name="Nashville Skyline"
      text="Probs my fav photoshoot, let me know about what you think about the music though."/>
      </a>
      <a href="https://open.spotify.com/album/10iefHq2stsarq3QvPCZ7u?si=VgPh9rs6R8WUu-DOEXnYbg">
      <Post
      img="https://upload.wikimedia.org/wikipedia/en/5/57/Bob_Dylan_-_Bob_Dylan_at_Budokan.jpg"
      name="Live at the Budokan"
      text="All your favorite songs but live now"/>
      </a>
    </div>
  );
}

export default Feed;