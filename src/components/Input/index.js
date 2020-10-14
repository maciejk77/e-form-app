import React from 'react';
import StyledInput from './styles';

const Input = (props) => (
  <StyledInput autoComplete="off" name="hidden" {...props} />
);

export default Input;
