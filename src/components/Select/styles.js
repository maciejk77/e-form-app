import styled from 'styled-components';

export const StyledSelect = styled.select`
  background: plum;
  border: ${({ error, theme }) =>
    `3px solid ${error ? theme.colors.error : theme.colors.base2}`};
  color: ${({ theme }) => theme.colors.font1};
  font-family: ${({ theme }) => theme.fonts.base2};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  outline: none;
  padding: 5px;
`;

export const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.fontSize.large};
`;
