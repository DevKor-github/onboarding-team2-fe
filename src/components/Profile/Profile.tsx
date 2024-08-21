import Avatar from '../Avatar/Avatar';
import './profile.css';

interface profileProps {
  name: string;
}

function Profile({ name }: profileProps) {
  return (
    <div className="profile flex justify-center items-center gap-1">
      <Avatar />
      <p>{name}</p>
    </div>
  );
}

export default Profile;
