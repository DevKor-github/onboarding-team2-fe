import { useEffect, useState } from 'react';
import { socket } from '../utils/socket';
import { ChatRoomType } from '../types/chatRoomType';
import { useGetChatRooms } from '../api/hooks/chatrooms';

/* Components */
import ChatRoom from '../components/ChatRoom/ChatRoom';
import Header from '../components/Header/Header';
import Topbar from '../components/Topbar/Topbar';
import NewChat from '../components/NewChat/NewChat';

function Home() {
  const [chatrooms, setChatrooms] = useState<ChatRoomType[]>();
  const { mutate: mutateGetChatRooms } = useGetChatRooms();

  useEffect(() => {
    mutateGetChatRooms(
      {
        limit: 1,
        offset: 1,
      },
      {
        onSuccess: (data) => {
          const chatrooms = data.data;
          const rooms = chatrooms.map((room) => ({
            roomId: room.roomId,
            name: room.name,
            lastMsgSent: '오후 8:00',
          }));

          setChatrooms(rooms);
        },
      }
    );
  }, [mutateGetChatRooms]);

  useEffect(() => {
    socket.emit('joinRoom', {
      roomId: '66c9631893b6fce3a7e54090',
      userId: localStorage.getItem('_id')!,
    });
  }, [socket]);

  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header start={<p>채팅</p>} />
      <div className="flex-shrink-0 divider" />
      <div className="chatroom-scroll flex flex-col h-full">
        {chatrooms &&
          chatrooms.map((room) => (
            <ChatRoom
              key={room.roomId}
              roomId={room.roomId}
              name={room.name}
              time={room.lastMsgSent}
            />
          ))}
        <NewChat />
      </div>
    </div>
  );
}

export default Home;
