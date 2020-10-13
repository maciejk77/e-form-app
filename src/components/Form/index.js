import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';

import Select from '../Select';
import Label from '../Label';
import Input from '../Input';
import Button from '../Button';
import Wrapper from '../Wrapper';
import Checkbox from '../Checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinators, fetchResponsible } from '../../actions';

const Form = () => {
  const dispatch = useDispatch();
  const { formState, handleChange, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchResponsible());
  }, [dispatch]);

  console.log('formState => ', formState);
  //console.log('state => ', useSelector((state) => state));

  const coordinators = useSelector((state) => state.coordinators);
  const responsible = useSelector((state) => state.responsible);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Wrapper>
        <Label htmlFor="Coordinators" />
        <Select options={coordinators} />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="Responsiblity" />
        <Select options={responsible} />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Description" />
        <Input
          onChange={handleChange}
          name="description"
          maxLength={140}
          value={formState.description}
        />
        <div>count: {formState.description.length}</div>
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Paid Event" />
        <Checkbox />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Event Fee" />
        <Input
          onChange={handleChange}
          name="event_fee"
          value={formState.event_fee}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Reward" />
        <Input onChange={handleChange} name="reward" value={formState.reward} />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Title" />
        <Input onChange={handleChange} name="title" value={formState.title} />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="Duration" />
        <Input
          onChange={handleChange}
          name="duration"
          value={formState.duration}
        />
      </Wrapper>

      <Button label="Submit" type="submit" />
    </form>
  );
};

export default Form;
