import {
  MdAccountCircle,
  MdComment,
  MdHome,
  MdOutlineAccountCircle,
  MdOutlineComment,
  MdOutlineHome,
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const curPath = location.pathname;

  return (
    <div className="navbar">
      <Link className="navbar-menu" to={'/home'}>
        {curPath === '/home' ? (
          <MdHome size={20} />
        ) : (
          <MdOutlineHome size={20} />
        )}
      </Link>
      <Link className="navbar-menu" to={'/chat'}>
        {curPath === '/chat' ? (
          <MdComment size={20} />
        ) : (
          <MdOutlineComment size={20} />
        )}
      </Link>
      <div className="sp-1" />
      <Link className="navbar-menu justify-right" to={'/account'}>
        {curPath.startsWith('/account') ? (
          <MdAccountCircle size={20} />
        ) : (
          <MdOutlineAccountCircle size={20} />
        )}
      </Link>
    </div>
  );
}

export default Navbar;
