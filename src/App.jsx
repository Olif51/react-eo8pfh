import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import MyProfile from './components/MyProfile';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>{<MyProfile />}</ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyProfile">My profile</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
