import React from 'react';
import StyledInput from './styles';

const Input = ({ onChange, name, maxLength, value }) => (
  <StyledInput
    onChange={onChange}
    type="text"
    name={name}
    maxLength={maxLength}
    value={value}
  />
);

export default Input;
