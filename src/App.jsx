import './App.css';
import React, { Component } from 'react';
import AddHabit from './components/AddHabit';
import Habits from './components/Habits';
import Reset from './components/Reset';
class App extends Component {
  state = {
    habits: [
      { id: 1, name: '책읽기', count: 0 },
      { id: 2, name: '코딩', count: 1 },
      { id: 3, name: '운동', count: 0 },
    ],
  };
  // Add 로직
  handleAdd = (habit) => {
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };
  // Habit 로직
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id && habit.count - 1 >= 0) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => habit.id !== item.id);
    this.setState({ habits });
  };

  // Reset 로직
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      return { ...habit, count: 0 };
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <AddHabit onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onReset={this.handleReset} />
      </>
    );
  }
}

export default App;
