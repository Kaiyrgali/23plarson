import React from 'react';
import users from '../../services/users';
import './Aside.css';

function Aside() {
  const userItem = users.map((user) => <p key={user} className="Aside-User">{user}</p>);

  return (
    <div className="Aside">
      {userItem}
    </div>
  );
}

export default Aside;
