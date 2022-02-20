import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.count}</span>
      </nav>
    );
  }
}

export default NavBar;
