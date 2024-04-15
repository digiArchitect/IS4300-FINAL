import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  let container = {
    border: '2px solid #92C7CF',
    display: 'flex',
    alignItems: 'center', // Vertical alignment
    marginBottom: '20px', // Spacing between posts
    height: 'auto', // Setting height to auto to adjust to content
    width: '500px'
  };

  let image = {
    width: '100%',
    height: '100%', // Making the image fill the div's height
    objectFit: 'cover' // To ensure the image covers the div without stretching
  };

  return (
    <div style={container}>
      <figure style={{ margin: 0, width: '100%', height: '100%' }}>
        <img style={image} src={props.img} alt={props.name} />
        <figcaption style={{ textAlign: 'center', paddingTop: '10px' }}>
          <strong>{props.name}</strong> <br />
          {props.text}
        </figcaption>
      </figure>
    </div>
  );
}

Post.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
};

export default Post;
