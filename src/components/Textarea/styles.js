import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background: plum;
  border: ${({ error, theme }) =>
    `3px solid ${error ? theme.colors.error : theme.colors.base2}`};
  color: ${({ theme }) => theme.colors.font1};
  font-family: ${({ theme }) => theme.fonts.base2};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;
  height: 50px;
  margin-bottom: 1px;
  outline: none;
  padding: 5px;
  resize: none;
  rows: 3;
`;

export default StyledTextarea;
