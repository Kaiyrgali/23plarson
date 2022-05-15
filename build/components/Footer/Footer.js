import './Footer.css';

function Footer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Footer"
  }, /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    className: "Footer-Textarea",
    placeholder: "Type your message ...",
    rows: "4",
    cols: "30",
    autoFocus: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "Footer-Input",
    type: "submit",
    value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
  }));
}

export default Footer;