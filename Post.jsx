import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  let image = {
    float: 'left',
    padding: '0 10px 0 10px',
    marginTop: '15px'
  }
  let text = {
    paddingLeft: '10px',
    marginTop: '-10px'
  }
  let border={
    border: '1px solid lightblue',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr'
  }
  let name={
    marginLeft: '10px',
    backgroundColor: 'lightblue'
  }
  return (
    <div style={border}>
      <div>
      <p style={name}><strong>{props.name}</strong></p>
      <img style={image} src={props.img}/>
      <p style={text}>{props.text}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default Post;