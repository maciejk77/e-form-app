import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
`;

const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

export default Row;
