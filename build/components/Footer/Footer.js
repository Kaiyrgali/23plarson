import React from 'react';
import './Footer.css';

function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Footer"
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    className: "Footer-Textarea",
    placeholder: "Type your message ...",
    rows: "4",
    cols: "30"
  }), /*#__PURE__*/React.createElement("input", {
    className: "Footer-Input",
    type: "submit",
    value: "Send"
  }));
}

export default Footer;