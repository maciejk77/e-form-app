import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input``;

const Checkbox = ({ checked, onChange, name, value }) => (
  <StyledCheckbox
    checked={checked}
    name={name}
    onChange={onChange}
    type="checkbox"
    value={value}
  />
);

export default Checkbox;
