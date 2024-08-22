import { useEffect } from 'react';
import { socket } from '../utils/socket';

/* Components */
import ChatRoom from '../components/ChatRoom/ChatRoom';
import Header from '../components/Header/Header';
import Topbar from '../components/Topbar/Topbar';

// Dummy
import chatroomDummy from '../utils/chatroomDummy.json';

interface ChatRoomData {
  roomId: string;
  name: string;
  lastMsgSent: string;
}

const chatrooms: ChatRoomData[] = chatroomDummy as ChatRoomData[];

function Home() {
  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: '66c045da1dbb6222e6c753f9',
      userId: localStorage.getItem('_id')!,
    });
  }, [socket]);

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header start={<p>채팅</p>} />
      <div className="flex-shrink-0 divider" />
      <div className="chatroom-scroll">
        {chatrooms.map((room) => (
          <ChatRoom
            key={room.roomId}
            roomId={room.roomId}
            name={room.name}
            time={room.lastMsgSent}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
