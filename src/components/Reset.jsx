import React from 'react';

const Reset = (props) => {
  return (
    <>
      <button
        className="habits-reset" //
        onClick={props.onReset}
      >
        Reset All
      </button>
    </>
  );
};

export default Reset;
