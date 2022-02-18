import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: '책읽기', count: 0 },
      { id: 2, name: '코딩', count: 1 },
      { id: 3, name: '운동', count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;
