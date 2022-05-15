import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "Header"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "Logo",
    src: "./logo.svg",
    alt: "Logo"
  })), /*#__PURE__*/React.createElement(Link, {
    to: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "Header-Nav"
  }, "Setting")), /*#__PURE__*/React.createElement(Link, {
    to: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "Header-Nav"
  }, "Contacts")));
}

export default Header;