import React from 'react';

const Reset = ({ onReset }) => {
  return (
    <>
      <button
        className="habits-reset" //
        onClick={onReset}
      >
        Reset All
      </button>
    </>
  );
};

export default Reset;
