import React, { useState } from 'react';

function FriendList() {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  let container = {
  
    backgroundColor: '#FBF9F1',
    border: '2px solid lightgray',
    paddingLeft: '15px',
    color: '#777777'

  };

  let textStyle = {
    color: "#92C7CF"
  };

  let inputStyle = {
    height: '30px',
    width: '200px',
    border: '5px solid #00ddff'
  };

  let buttonStyle = {
    backgroundColor: '#4f7fcc',
    padding: '7px 25px 7px 25px',
    marginTop: '5px',
    color: 'white',
    float: 'right'
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentClick = () => {
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  return (
    <div style={container}>
      <h1 style={textStyle}>Comments</h1>
      <div>
        <input 
          style={inputStyle} 
          type="text" 
          placeholder="Feedback?"
          value={comment}
          onChange={handleInputChange}
        />
        <button 
          style={buttonStyle}
          onClick={handleCommentClick}
        >
          Comment
        </button>
      </div>
      <div>
        {commentsList.map((commentText, index) => (
          <p key={index} style={textStyle}>
            {commentText}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FriendList;