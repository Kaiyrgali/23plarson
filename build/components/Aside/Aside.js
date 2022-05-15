import { users } from '../../services/users';
import './Aside.css';

function Aside() {
  const userItem = users.map((user, i) => {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "Aside-User"
    }, user);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "Aside"
  }, userItem);
}

export default Aside;