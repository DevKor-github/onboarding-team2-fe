import { MdMoreHoriz } from 'react-icons/md';
import Avatar from '../Avatar/Avatar';
import './profile.css';

interface profileProps {
  name: string;
}

function Profile({ name }: profileProps) {
  return (
    <div className="profile flex shadow-bottom">
      <div className="user flex">
        <Avatar />
        <p className="profile-name">{name}</p>
      </div>
      <MdMoreHoriz size={16} />
    </div>
  );
}

export default Profile;
