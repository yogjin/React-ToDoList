import './App.css';
import React, { useCallback, useState } from 'react';
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
  const handleAdd = useCallback((name) => {
    setHabits((habits) => [
      ...habits,
      { id: new Date().toISOString(), name, count: 0 },
    ]);
  }, []);

  // Habit 로직
  const handleIncrement = (habit) => {
    setHabits((habits) => {
      console.log(habits);
      return habits.map((item) => {
        if (habit.id === item.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (habit.id === item.id && habit.count - 1 >= 0) {
          return { ...habit, count: habit.count - 1 };
        }
        return item;
      })
    );
  }, []);
  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => habit.id !== item.id));
  }, []);

  // Reset 로직
  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count !== 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  }, []);
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
