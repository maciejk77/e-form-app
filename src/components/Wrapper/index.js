import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.label`
  border: 1px solid blue;
  margin-bottom: 2px;
  padding: 5px;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
