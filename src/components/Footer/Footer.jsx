import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <textarea
        name="message"
        className="Footer-Textarea"
        placeholder="Type your message ..."
        rows="4"
        cols="30"
      />
      <input
        className="Footer-Input"
        type="submit"
        value="Send"
      />
    </div>
  );
}

export default Footer;
