import { users } from '../../services/users';
import './Aside.css';

function Aside() {
  const userItem = users.map((user, i) => { 
    return <p key={i} className="Aside-User">{user}</p>
  })
  
    return (
    <div className="Aside">
      {userItem}
    </div>
  );
}

export default Aside;
