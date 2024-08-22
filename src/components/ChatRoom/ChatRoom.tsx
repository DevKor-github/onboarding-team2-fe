import { useNavigate } from 'react-router-dom';
import Profile from '../Profile/Profile';
import './chatroom.css';

interface chatRoomProps {
  roomId: string;
  name: string;
  time: string;
}

function ChatRoom({ roomId, name, time }: chatRoomProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-between items-center flex-shrink-0 shadow-bottom self-stretch chatroom"
      onClick={() => navigate(`/chat/${roomId}`)}
    >
      <Profile name={name} />
      <p className="chat-time">{time}</p>
    </div>
  );
}

export default ChatRoom;
