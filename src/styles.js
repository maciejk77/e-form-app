import styled from 'styled-components';

export const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.base1};
  color: ${({ theme }) => theme.colors.base2};
  margin: 0 auto;
  min-width: 204px;
  max-width: 768px;
  padding: 20px;
`;

export const StyledHeader = styled.h1`
  align-self: center;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.base1};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  line-height: 60px;
  margin-bottom: 15px;
  padding: 2px 5px;
`;
