import { Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Main from './pages/Main';
import SigIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Reset from './pages/Reset';

import { getItem } from './utils/storage'

function PrivateRoutes({ redirectedto }) {
  const isAuthenticated = getItem('token');
  
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectedto} />
}

function MainRoutes() {
  return (
    <Routes>
      <Route path='/sign-in' element={<SigIn />}/>
      <Route path='/sign-up' element={<SignUp />}/>
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/reset/:token' element={<Reset />} />
      
      <Route element={<PrivateRoutes redirectedto='/sign-in' />}>
        <Route path='/' element={<Main />}/>
      </Route>
    </Routes>
  )
}

export default MainRoutes;