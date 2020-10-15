import React from 'react';
import StyledButton from './styles';

const Button = ({ label, type, onClick }) => (
  <StyledButton onClick={onClick} type={type}>
    {label}
  </StyledButton>
);

export default Button;
