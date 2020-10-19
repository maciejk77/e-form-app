import styled from 'styled-components';

const StyledButton = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.base1};
  border: 3px solid ${({ theme }) => theme.colors.base2};
  color: ${({ theme }) => theme.colors.base2};
  font-family: ${({ theme }) => theme.fonts.base1};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: 25px 0;
  outline: none;
  padding: 5px;
  width: 200px;
`;

export default StyledButton;
