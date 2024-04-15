import React from 'react';
import PropTypes from "prop-types";

function Friend(props){
  let image = {
    width: '60x',
    height: '60px',
    marginRight: '15px'
  }
  let columns = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
  }
  let raised={
    marginTop: '-25px'
  }
  let textStyle= {
    color: "#FBF9F1"
  }

  return(
    <div style={columns}>
      <div>
        <img style={image} src={props.img}/>
      </div>
      <div style={raised}>
        <h4 style={textStyle}>{props.text}</h4>
      </div>
    </div>
  );
}

Friend.propTypes={
  img: PropTypes.string,
  text: PropTypes.string
};

export default Friend;