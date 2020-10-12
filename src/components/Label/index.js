import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 16px;
  font-family: 'Arial';
  padding: 0 2px;
`;

const Label = ({ label }) => <StyledLabel>{label}</StyledLabel>;

export default Label;
