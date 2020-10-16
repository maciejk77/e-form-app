import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
`;

const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

export default Row;
