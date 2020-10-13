import React from 'react';
import StyledLabel from './styles';

const Label = ({ children, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

export default Label;
