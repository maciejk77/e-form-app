import React from 'react';
import { LAST_NAME } from '../../constants';

const Select = ({ options }) => {
  const hasLastName = options.every((op) => LAST_NAME in op);
  const completeName = (option) =>
    hasLastName ? `${option.name} ${option.lastname}` : option.name;

  return (
    <select
      name="type"
      // onChange={handleFormItemChange}
      // value={type}
    >
      {options.map((option) => (
        <option key={option.id} value={completeName(option)}>
          {completeName(option)}
        </option>
      ))}
    </select>
  );
};

export default Select;
