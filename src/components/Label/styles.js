import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fonts.base1};
  padding: 5px;
`;

export default StyledLabel;
