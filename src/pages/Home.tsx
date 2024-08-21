import ChatRoom from '../components/ChatRoom/ChatRoom';
import Header from '../components/Header/Header';
import Topbar from '../components/Topbar/Topbar';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header start={<p>채팅</p>} />
      <div className="flex-shrink-0 divider" />
      <div className="chatroom-scroll">
        <ChatRoom name="채팅방 1" time="오후 8:00" />
      </div>
    </div>
  );
}

export default Home;
