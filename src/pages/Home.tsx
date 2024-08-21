import Header from '../components/Header/Header';
import Topbar from '../components/Topbar/Topbar';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Header start={<p>채팅</p>} />
    </div>
  );
}

export default Home;
