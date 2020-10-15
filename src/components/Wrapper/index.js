import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.label`
  display: flex;
  flex-direction: column;
  padding: 2px;
`;

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

export default Wrapper;
