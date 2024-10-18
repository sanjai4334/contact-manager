import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Contact Manager</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleNavCollapse}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites" onClick={handleNavCollapse}>Favorites</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/groups" onClick={handleNavCollapse}>Groups</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/emergency-contacts" onClick={handleNavCollapse}>Emergency Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;