import Profile from '../Profile/Profile';
import './chatroom.css';

interface chatRoomProps {
  name: string;
  time: string;
}

function ChatRoom({ name, time }: chatRoomProps) {
  return (
    <div className="flex justify-between items-center flex-shrink-0 shadow-bottom self-stretch chatroom">
      <Profile name={name} />
      <p className="chat-time">{time}</p>
    </div>
  );
}

export default ChatRoom;
