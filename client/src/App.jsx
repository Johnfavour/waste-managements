import React, { useContext } from 'react';
import './app.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import Register from './pages/Register';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Home/>} />
        <Route path='/registers' element={user ? <Navigate to='/admin' /> : <Register />} />
        <Route path='/login' element={user ? <Navigate to='/admin' /> : <Login />} />
        <Route path='/admin' element={user ? <Admin /> : <Login />} />
      </Routes>
      <div className='footer'>
        <p className='copyright'>© <span id="date">{new Date().getFullYear()}</span> Binix. All rights reserved</p>
      </div>
    </BrowserRouter>
  )
};

export default App;
