import React, { Component } from 'react';

class AddHabit extends Component {
  inputRef = React.createRef();

  handleAdd = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };
  render() {
    return (
      <>
        <form className="add-form" onSubmit={this.handleAdd}>
          <input ref={this.inputRef} type="text" className="add-input" />
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default AddHabit;
