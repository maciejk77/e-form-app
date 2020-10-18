import React from 'react';
import StyledButton from './styles';

const Button = (props) => (
  <StyledButton {...props} onClick={props.onClick}>
    {props.label}
  </StyledButton>
);

export default Button;
