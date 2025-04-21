import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import Navbar from './components/Navbar';

import './App.css';

const AppWrapper = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
