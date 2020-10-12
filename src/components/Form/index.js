import React, { useEffect } from 'react';
import Select from '../Select';
import Input from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinators, fetchResponsible } from '../../actions';

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchResponsible());
  }, [dispatch]);

  //console.log(useSelector((state) => state));

  const coordinators = useSelector((state) => state.coordinators);
  const responsible = useSelector((state) => state.responsible);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Coordinator</label>
      <Select options={coordinators} />
      <label>Responsible</label>
      <Select options={responsible} />

      <Input label="Title" />
      <Input label="Description" />
      <Input label="Date" />
      <Input label="Paid Event Y/N" type="checkbox" />
      <Input label="Event Fee" />
      <Input label="Reward" />
      <Input label="Duration" />
    </div>
  );
};

export default Form;
