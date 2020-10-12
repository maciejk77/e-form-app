import React, { useEffect } from 'react';
import Select from '../Select';
import Label from '../Label';
import Input from '../Input';
import Wrapper from '../Wrapper';
import Checkbox from '../Checkbox';

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
      <Wrapper>
        <Label label="Coordinators" />
        <Select options={coordinators} />
      </Wrapper>
      <Wrapper>
        <Label label="Responsiblity" />
        <Select options={responsible} />
      </Wrapper>

      <Wrapper>
        <Label label="Title" />
        <Input />
      </Wrapper>

      <Wrapper>
        <Label label="Description" />
        <Input />
      </Wrapper>

      <Wrapper>
        <Label label="Paid Event" />
        <Checkbox />
      </Wrapper>

      <Wrapper>
        <Label label="Event Fee" />
        <Input />
      </Wrapper>

      <Wrapper>
        <Label label="Reward" />
        <Input />
      </Wrapper>

      <Wrapper>
        <Label label="Date" />
        <Input />
      </Wrapper>

      <Wrapper>
        <Label label="Duration" />
        <Input />
      </Wrapper>
    </div>
  );
};

export default Form;
