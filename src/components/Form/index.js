import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Label from '../Label';
import Modal from '../Modal/index';
import Row from '../Row';
import Select from '../Select';
import Textarea from '../Textarea';
import Wrapper from '../Wrapper';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinators, fetchResponsible } from '../../actions';

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const { form, handleChange, handleSubmit } = useForm(setIsOpen);

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchResponsible());
  }, [dispatch]);

  console.log('form => ', form);
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
          value={form.title}
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
          value={form.description}
        />
        <Label>({form.description.length})</Label>
      </Wrapper>

      <Row>
        <Checkbox
          name="paid_event"
          onChange={handleChange}
          checked={form.paid_event ? 'on' : 'off'}
          value={form.paid_event ? 'on' : 'off'}
        />
        <Label htmlFor="paid event">Payment</Label>
      </Row>

      {form.paid_event && ( // switch to true, temporary for testing here
        <Wrapper>
          <Label htmlFor="event fee">Event Fee</Label>
          <Input
            onChange={handleChange}
            placeholder="[numbers here]"
            name="event_fee"
            type="number"
            value={form.event_fee}
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
          value={form.reward}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="date">Date</Label>
        <Input
          onChange={handleChange}
          name="date"
          // pattern={datePattern}
          required
          type="date"
          value={form.date}
        />
        <Input
          onChange={handleChange}
          name="time"
          // pattern={timePattern}
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
          value={form.duration}
        />
      </Wrapper>

      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <Label>Success!</Label>
          <Label>Thank you for adding an event</Label>
        </Modal>
      )}

      <Row>
        <Button label="Submit" type="submit" />
      </Row>
    </form>
  );
};

export default Form;
