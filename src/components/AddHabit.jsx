import React from 'react';

const AddHabit = (props) => {
  const inputRef = React.createRef();

  const handleAdd = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
    <>
      <form className="add-form" onSubmit={handleAdd}>
        <input ref={inputRef} type="text" className="add-input" />
        <button className="add-button">Add</button>
      </form>
    </>
  );
};

export default AddHabit;
