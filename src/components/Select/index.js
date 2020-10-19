import React from 'react';
import { LAST_NAME } from '../../constants';
import { StyledSelect, StyledOption } from './styles';

const Select = ({ error, name, options, onChange }) => {
  const hasLastName = options.every((option) => LAST_NAME in option);

  const formattedOptions = options.reduce((acc, opt) => {
    const newName = `${hasLastName ? `${opt.name} ${opt.lastname}` : opt.name}`;
    return [...acc, { id: opt.id, name: newName, email: opt.email }];
  }, []);

  return (
    <StyledSelect name={name} onChange={onChange} error={error}>
      <StyledOption value="">--- select here ---</StyledOption>
      {formattedOptions.map((option) => (
        <StyledOption key={option.id} value={option.id}>
          {option.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
