import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { fetchCoordinators, fetchCategories } from '../../actions';
import format from '../../utils/format';
import showSubmit from '../../utils/showSubmit';
import { DATE_PATTERN, TIME_PATTERN } from '../../constants/index';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Label from '../Label';
// import Modal from '../Modal/index';
import Row from '../Row';
import Select from '../Select';
import Textarea from '../Textarea';
import Wrapper from '../Wrapper';

const Form = () => {
  const { handleChange, handleSubmit, form } = useForm(showSubmit, format);
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchCategories());
  }, [dispatch]);

  // console.log('FORM ==> ', form);

  // console.log(
  //   'STATE => ',
  //   useSelector((state) => state)
  // );

  const coordinators = useSelector((state) => state.coordinators);
  const categories = useSelector((state) => state.categories);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Wrapper>
        <Label htmlFor="coordinator">Coordinators</Label>
        <Select
          onChange={handleChange}
          options={coordinators}
          name="coordinator"
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="category_id">Categories</Label>

        <Select
          onChange={handleChange}
          options={categories}
          name="category_id"
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
          checked={form.paid_event ? 'checked' : ''}
          value={form.paid_event}
        />
        <Label htmlFor="paid_event">Payment</Label>
      </Row>

      {form.paid_event && (
        <Wrapper>
          <Label htmlFor="event_fee">Event Fee</Label>
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
          pattern={DATE_PATTERN}
          required
          type="date"
          value={form.date}
        />
        <Input
          onChange={handleChange}
          name="time"
          pattern={TIME_PATTERN}
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
      {/* 
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <Label>Success!</Label>
          <Label>Thank you for adding an event</Label>
        </Modal>
      )} */}

      <Button label="Submit" type="submit" />
    </form>
  );
};

export default Form;
