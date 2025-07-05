import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Mainpage from './components/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
