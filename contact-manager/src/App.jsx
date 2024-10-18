import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Groups from './pages/Groups';
import EmergencyContacts from './pages/EmergencyContacts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
    </Router>
  );
};

export default App;
