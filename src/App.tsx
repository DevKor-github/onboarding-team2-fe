import { useRoutes } from 'react-router-dom';
import { useSocket } from './utils/redux/SocketContext';
import routes from './router';
import { useEffect } from 'react';

function App() {
  const socket = useSocket();

  useEffect(() => {
    socket.on('connect', () => console.log('Connected to socket'));

    return () => {
      socket.off('connect');
    };
  }, [socket]);

  const route = useRoutes(routes);
  return route;
}

export default App;
