import React from 'react';
import messages from '../../services/messages';
import './Main.css';

function Main() {
  const messageItem = messages.map((message, i) => <p key={i} className="Main-Message">{message}</p>);

  return (
    <div className="Main">
      {messageItem}
    </div>
  );
}

export default Main;
