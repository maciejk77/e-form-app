import React from 'react';
import { LAST_NAME } from '../../constants';
import { StyledSelect, StyledOption } from './styles';

const Select = ({ options }) => {
  const hasLastName = options.every((op) => LAST_NAME in op);

  const formattedOptions = options.reduce((acc, el) => {
    const newName = `${hasLastName ? `${el.name} ${el.lastname}` : el.name}`;
    return [...acc, { id: el.id, name: newName }];
  }, []);

  return (
    <StyledSelect
      name="type"
      // onChange={handleFormItemChange}
      // value={type}
    >
      <StyledOption label="--- select ---" value=""></StyledOption>
      {formattedOptions.map((option) => (
        <StyledOption key={option.id} value={option.name}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
