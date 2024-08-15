import { RouteObject } from 'react-router-dom';

/* Pages */
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home';
import Chat from '../pages/chat/Chat';
import Account from '../pages/account/Account';
import ResetPassword from '../pages/account/ResetPassword';

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/home', element: <Home /> },
      { path: '/chat', element: <Chat /> },
      { path: '/account', element: <Account /> },
      { path: '/account/resetPassword', element: <ResetPassword /> },
    ],
  },
];
export default routes;
