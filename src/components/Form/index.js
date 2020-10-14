import React, { useEffect } from 'react';
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
import { datePattern, SWITCH_PAYMENT_STATUS } from '../../constants';

const Form = () => {
  const dispatch = useDispatch();
  const { formState, handleChange, handleSubmit } = useForm();

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
        <Select
          onChange={handleChange}
          options={coordinators}
          name="coordinator"
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="responsible">Responsibility</Label>

        <Select
          onChange={handleChange}
          options={responsible}
          name="responsible"
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="title">Title</Label>
        <Input
          onChange={handleChange}
          placeholder="[text here]"
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
          placeholder="[text here]"
          name="description"
          maxLength={140}
          required
          type="text"
          value={formState.description}
        />
        <Label>({formState.description.length})</Label>
      </Wrapper>

      <span>
        <Checkbox
          name="paid_fee"
          onClick={() => dispatch({ type: SWITCH_PAYMENT_STATUS })}
        />
        <Label htmlFor="paid event">Payment</Label>
      </span>

      {!formState.paid_event && (
        <Wrapper>
          <Label htmlFor="event fee">Event Fee</Label>
          <Input
            onChange={handleChange}
            placeholder="[numbers here]"
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
          placeholder="[numbers here]"
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
        <Input
          onChange={handleChange}
          name="time"
          // pattern={datePattern}
          // placeholder="YYYY-MM-DD"
          required
          type="time"
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="duration">Duration</Label>
        <Input
          onChange={handleChange}
          placeholder="[numbers here]"
          name="duration"
          type="number"
          value={formState.duration}
        />
      </Wrapper>

      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      >
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
