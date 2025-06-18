import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MovieTrailer from './pages/MovieTrailer';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/MovieTrailer' element={<MovieTrailer/>} />
      <Route path='/Profile' element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
