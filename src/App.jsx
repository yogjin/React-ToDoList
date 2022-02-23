import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import AddHabit from './components/AddHabit';
import Habits from './components/Habits';
import Reset from './components/Reset';

const App = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: '책읽기', count: 0 },
    { id: 2, name: '코딩', count: 0 },
    { id: 3, name: '운동', count: 0 },
  ]);

  // NavBar 로직
  const getHabitsCountAll = () => {
    let count = 0;
    habits.forEach((habit) => {
      count += habit.count;
    });
    return count;
  };
  // Add 로직
  const handleAdd = (name) => {
    const updatedHabits = [
      ...habits,
      { id: new Date().toISOString(), name, count: 0 },
    ];
    setHabits(updatedHabits);
  };
  // Habit 로직
  const handleIncrement = (habit) => {
    const updatedHabits = habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(updatedHabits);
  };
  const handleDecrement = (habit) => {
    const updatedHabits = habits.map((item) => {
      if (habit.id === item.id && habit.count - 1 >= 0) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });
    setHabits(updatedHabits);
  };
  const handleDelete = (habit) => {
    const updatedHabits = habits.filter((item) => habit.id !== item.id);
    setHabits(updatedHabits);
  };

  // Reset 로직
  const handleReset = () => {
    const updatedHabits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };
  return (
    <>
      <NavBar count={getHabitsCountAll()} />
      <div className="habits">
        <AddHabit onAdd={handleAdd} />
        <Habits
          habits={habits}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
        <Reset onReset={handleReset} />
      </div>
    </>
  );
};

export default App;
