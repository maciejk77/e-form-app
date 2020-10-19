import styled from 'styled-components';

const StyledInput = styled.input`
  background: plum;
  border: ${({ error, theme }) =>
    `3px solid ${error ? theme.colors.error : theme.colors.base2}`};
  color: indigo;
  font-family: ${({ theme }) => theme.fonts.base2};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  margin-bottom: 5px;
  outline: none;
  padding: 5px;
`;

export default StyledInput;
