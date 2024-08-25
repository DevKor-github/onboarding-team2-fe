import { useEffect, useState } from 'react';
import { ChatRoomType } from '../types/chatRoomType';
import { useGetChatRooms } from '../api/hooks/chatrooms';
import { formatDate } from '../utils/timeFormat';

/* Components */
import ChatRoom from '../components/ChatRoom/ChatRoom';
import Header from '../components/Header/Header';
import Topbar from '../components/Topbar/Topbar';
import NewChatButton from '../components/NewChat/NewChatButton';

function Home() {
  const [chatrooms, setChatrooms] = useState<ChatRoomType[]>();
  const { mutate: mutateGetChatRooms } = useGetChatRooms();

  useEffect(() => {
    mutateGetChatRooms(
      {
        limit: 10,
        offset: 0,
      },
      {
        onSuccess: (data) => {
          const chatrooms = data.data;
          const rooms = chatrooms.map((room) => ({
            roomId: room.roomId,
            name: room.name,
            lastMsgSent: formatDate(room.lastMsgSent),
          }));

          setChatrooms(rooms);
        },
      }
    );
  }, [mutateGetChatRooms]);

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
        <NewChatButton />
      </div>
    </div>
  );
}

export default Home;
