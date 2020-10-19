import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background: plum;
  border: ${(props) => (props.error ? '3px solid red' : '3px solid #f8dd74')};
  color: indigo;
  font-family: 'Lato';
  font-size: 15px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 1px;
  outline: none;
  padding: 5px;
  resize: none;
  rows: 3;
`;

export default StyledTextarea;
