import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
