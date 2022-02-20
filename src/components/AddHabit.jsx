import React, { Component } from 'react';

class AddHabit extends Component {
  inputRef = React.createRef();

  handleAdd = () => {
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
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
