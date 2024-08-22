import { RouteObject } from 'react-router-dom';

/* Pages */
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Account from '../pages/account/Account';
import ResetPassword from '../pages/account/ResetPassword';

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/home', element: <Home /> },
      { path: '/chat/:roomId', element: <Chat /> },
      { path: '/account', element: <Account /> },
      { path: '/account/resetPassword', element: <ResetPassword /> },
    ],
  },
];
export default routes;
