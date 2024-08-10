import { MdAccountCircle, MdComment, MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-menu" to={'/home'}>
        <MdHome size={20} />
      </Link>
      <Link className="navbar-menu" to={'/chatting'}>
        <MdComment size={20} />
      </Link>
      <div className="sp-1" />
      <Link className="navbar-menu justify-right" to={'/setting'}>
        <MdAccountCircle size={20} />
      </Link>
    </div>
  );
}

export default Navbar;
