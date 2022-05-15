import React from 'react';
import messages from '../../services/messages';
import './Main.css';

function Main() {
  const messageItem = messages.map((message, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "Main-Message"
  }, message));
  return /*#__PURE__*/React.createElement("div", {
    className: "Main"
  }, messageItem);
}

export default Main;