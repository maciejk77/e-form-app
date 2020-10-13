import React from 'react';
import StyledButton from './styles';

const Button = ({ label, type }) => (
  <StyledButton type={type}>{label}</StyledButton>
);

export default Button;
