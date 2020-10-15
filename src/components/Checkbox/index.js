import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input``;

const Checkbox = ({ onChange, checked, value }) => (
  <StyledCheckbox
    type="checkbox"
    checked={checked}
    onChange={onChange}
    value={value}
  />
);

export default Checkbox;
