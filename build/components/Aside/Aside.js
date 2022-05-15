import React from 'react';
import users from '../../services/users';
import './Aside.css';

function Aside() {
  const userItem = users.map(user => /*#__PURE__*/React.createElement("p", {
    key: user,
    className: "Aside-User"
  }, user));
  return /*#__PURE__*/React.createElement("div", {
    className: "Aside"
  }, userItem);
}

export default Aside;