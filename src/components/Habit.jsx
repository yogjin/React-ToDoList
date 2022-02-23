import React, { memo, useEffect } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  // LifeCycle function
  useEffect(() => {
    console.log(`mounted & updated!`);
  }, [habit]);

  // Habit 로직
  const handleIncrement = () => {
    onIncrement(habit);
  };
  const handleDecrement = () => {
    onDecrement(habit);
  };
  const handleDelete = () => {
    onDelete(habit);
  };

  const { name, count } = habit;

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
