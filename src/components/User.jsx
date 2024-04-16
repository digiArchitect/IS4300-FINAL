import React from "react";
import Badge from './Badge';
import Bio from './Bio';
import Feed from './Feed';
import FriendList from './FriendList';
// Import other components if you have them


function User() {
  let columns = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginLeft: '25px',
    marginRight: '25px',
    backgroundColor: '#FBF9F1'
  };

  return (
      <div>    
        <div style={columns}>
          <div>
            <Badge />
            <Bio />
          </div>
          <div>
            <Feed />
          </div>
          <div>
            <FriendList />
          </div>
        </div>
      </div>
  );
}

export default User;
