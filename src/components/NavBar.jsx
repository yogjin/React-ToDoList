import React from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <i className="fas fa-leaf navbar-logo"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.count}</span>
    </nav>
  );
};

export default NavBar;
