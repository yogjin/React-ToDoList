import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
  state = {
    habits: [
      { name: '책읽기', count: 0 },
      { name: '코딩', count: 1 },
      { name: '운동', count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
