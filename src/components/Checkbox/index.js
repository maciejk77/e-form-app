import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
  border: 1px solid red;
  outline: none;
  padding: 5px;
`;

const Checkbox = () => {
  return (
    <div>
      <StyledCheckbox type="checkbox" />
    </div>
  );
};

export default Checkbox;
