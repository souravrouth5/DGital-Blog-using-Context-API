import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Allblogs } from './Pages/AllBlogs';
import { ContextWrapper } from './Context/Auth';
import { Blogdetails } from './Pages/Blogdetails';
import { Courses } from './Pages/Courses';
import { UpdatePassword } from './Pages/UpdatePassword';
import { Contact } from './Pages/Contact';
import { PostsCategory } from './Pages/PostsCategory';
import { Profile } from './Pages/Profile';

function App() {

  const ProtectRoute = ( { children } ) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined ? ( children ) : <Navigate to="/login" />
  }

  const Publicroutes = [
    {
      path: '/',
      component: <Home/>
    },
    {
      path: '/register',
      component: <Register />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/contactus',
      component: <Contact />
    },
    {
      path: '/profile',
      component: <Profile />
    }
  ]

  const Privateroutes = [
    {
      path: '/blogs',
      component: <Allblogs/>
    },
    {
      path: '/blogs/blogdetails/:id',
      component: <Blogdetails />
    },
    {
      path: '/courses',
      component: <Courses/>
    },
    {
      path: '/updatepassword',
      component: <UpdatePassword />
    },
    {
      path: '/blogs/post-by-category/:id',
      component: <PostsCategory />
    }
  ]
  return (
    <>
    
    <ToastContainer/>
    <ContextWrapper>
        <Router>
          <Routes>
            {
              Publicroutes.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={item.component} />
                )
              })
            }

            {
              Privateroutes.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={<ProtectRoute>{item.component}</ProtectRoute>} />
                )
              })
            }
          </Routes>
        </Router>
    </ContextWrapper>

    </>
  );
}

export default App;
