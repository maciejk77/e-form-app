import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Label from '../Label';
import Select from '../Select';
import Textarea from '../Textarea';
import Wrapper from '../Wrapper';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinators, fetchResponsible } from '../../actions';
import { datePattern } from '../../constants';

const Form = () => {
  const dispatch = useDispatch();
  const { formState, handleChange, handleSubmit } = useForm();
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchResponsible());
  }, [dispatch]);

  console.log('formState => ', formState);
  // console.log('state => ', useSelector((state) => state));

  const coordinators = useSelector((state) => state.coordinators);
  const responsible = useSelector((state) => state.responsible);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Wrapper>
        <Label htmlFor="coordinators">Coordinators</Label>
        <Select options={coordinators} />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="responsible">Responsible</Label>
        <Select options={responsible} />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="title">Title</Label>
        <Input
          onChange={handleChange}
          name="title"
          type="text"
          required
          value={formState.title}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="description">Description</Label>{' '}
        <Textarea
          onChange={handleChange}
          name="description"
          maxLength={140}
          required
          type="text"
          value={formState.description}
        />
        <Label>count: {formState.description.length}</Label>
      </Wrapper>

      <Wrapper>
        <Label htmlFor="paid event">Paid Event</Label>
        <Checkbox />
        {/* <Label>{isPaid ? 'Paid' : 'Free'}</Label> */}
      </Wrapper>

      {formState.paid_event && (
        <Wrapper>
          <Label htmlFor="event fee">Event Fee</Label>
          <Input
            onChange={handleChange}
            name="event_fee"
            type="number"
            value={formState.event_fee}
          />
        </Wrapper>
      )}

      <Wrapper>
        <Label htmlFor="reward">Reward</Label>
        <Input
          onChange={handleChange}
          name="reward"
          type="number"
          value={formState.reward}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="date">Date</Label>
        <Input
          onChange={handleChange}
          name="date"
          // pattern={datePattern}
          // placeholder="YYYY-MM-DD"
          required
          type="date"
          value={formState.date}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="duration">Duration</Label>
        <Input
          onChange={handleChange}
          name="duration"
          type="number"
          value={formState.duration}
        />
      </Wrapper>
      <Wrapper>
        <Button label="Submit" type="submit" />
      </Wrapper>
    </form>
  );
};

export default Form;
