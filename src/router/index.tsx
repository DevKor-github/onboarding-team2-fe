import { RouteObject } from 'react-router-dom'

/* Pages */
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

const routes: RouteObject[] = [
    {
      path: '/',
      children: [
        { path: '/', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/home', element: <Home /> },
      ]
    }
  ]
  export default routes
  