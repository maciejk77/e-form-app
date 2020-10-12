import React from 'react';

const Input = ({ label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type || 'text'} />
    </div>
  );
};

export default Input;
