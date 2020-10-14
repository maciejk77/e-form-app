import React from 'react';
import { LAST_NAME } from '../../constants';
import { StyledSelect, StyledOption } from './styles';

const Select = ({ name, options, onChange }) => {
  const hasLastName = options.every((option) => LAST_NAME in option);

  const formattedOptions = options.reduce((acc, el) => {
    const newName = `${hasLastName ? `${el.name} ${el.lastname}` : el.name}`;
    return [...acc, { id: el.id, name: newName, email: el.email }];
  }, []);

  return (
    <StyledSelect
      name={name}
      onChange={onChange}
      // value={type}
    >
      <StyledOption value="">--- select here ---</StyledOption>
      {formattedOptions.map((option) => (
        <StyledOption key={option.id} value={JSON.stringify(option)}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
