import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Netflix from './Pages/Netflix';
import Login from './Pages/Login';
import Signup from './Pages/Signup';// Corrected import statement
import BackgroundImage from './components/BackgroundImage';
import Navbar from './components/Navbar';
import Player from './Pages/Player';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} /> ba
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/background" element={<BackgroundImage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
