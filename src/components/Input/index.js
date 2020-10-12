import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid red;
  outline: none;
  padding: 5px;
`;

const Input = () => <StyledInput type="text" />;

export default Input;
