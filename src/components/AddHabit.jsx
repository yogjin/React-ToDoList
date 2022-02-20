import React, { Component } from 'react';

class AddHabit extends Component {
  inputRef = React.createRef();

  handleAdd = () => {
    const id = new Date().toISOString();
    const name = this.inputRef.current.value;
    const count = 0;
    const habit = { id, name, count };
    this.props.onAdd(habit);

    document.querySelector('.add-input').value = '';
  };
  render() {
    return (
      <>
        <input ref={this.inputRef} type="text" className="add-input" />
        <button className="add-button" onClick={this.handleAdd}>
          Add
        </button>
      </>
    );
  }
}

export default AddHabit;
