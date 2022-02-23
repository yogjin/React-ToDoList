import React from 'react';

const NavBar = ({ count }) => {
  return (
    <nav className="navbar">
      <i className="fas fa-leaf navbar-logo"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{count}</span>
    </nav>
  );
};

export default NavBar;
