import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { fetchCoordinators, fetchCategories } from '../../actions';
import { format, validate } from '../../utils';
import { DATE_PATTERN, TIME_PATTERN } from '../../constants/index';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Label from '../Label';
import Row from '../Row';
import Select from '../Select';
import Textarea from '../Textarea';
import Wrapper from '../Wrapper';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { form, handleChange, handleSubmit, errors } = useForm(
    setIsSubmitting,
    format,
    validate
  );

  useEffect(() => {
    dispatch(fetchCoordinators());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isSubmitting) {
      history.push('/confirmation');
    }
  }, [isSubmitting, history]);

  useEffect(() => {
    console.log(
      '>> localStorage last persisted form <<',
      JSON.parse(localStorage.getItem('persisted-form'))
    );
  }, []);

  const categories = useSelector((state) => state.categories);
  const coordinators = useSelector((state) => state.coordinators);

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="coordinator">Coordinators</Label>
        <Select
          error={errors.coordinator}
          name="coordinator"
          onChange={handleChange}
          options={coordinators}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="category_id">Categories</Label>

        <Select
          name="category_id"
          onChange={handleChange}
          options={categories}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="title">Title</Label>
        <Input
          error={errors.title}
          name="title"
          onChange={handleChange}
          placeholder="[text here]"
          type="text"
          value={form.title}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="description">Description</Label>{' '}
        <Textarea
          error={errors.description}
          maxLength={140}
          name="description"
          onChange={handleChange}
          placeholder="[text here]"
          type="text"
          value={form.description}
        />
        <Label>({form.description.length})</Label>
      </Wrapper>

      <Row>
        <Checkbox
          checked={form.paid_event ? 'checked' : ''}
          name="paid_event"
          onChange={handleChange}
          value={form.paid_event}
        />
        <Label htmlFor="paid_event">Payment</Label>
      </Row>

      {form.paid_event && (
        <>
          <Wrapper>
            <Label htmlFor="event_fee">Event Fee</Label>
            <Input
              error={errors.event_fee}
              name="event_fee"
              onChange={handleChange}
              placeholder="[numbers here]"
              type="number"
              value={form.event_fee}
            />
          </Wrapper>
        </>
      )}

      <Wrapper>
        <Label htmlFor="reward">Reward</Label>
        <Input
          name="reward"
          onChange={handleChange}
          placeholder="[numbers here]"
          type="number"
          value={form.reward}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="date">Date</Label>
        <Input
          error={errors.date}
          name="date"
          onChange={handleChange}
          pattern={DATE_PATTERN}
          type="date"
          value={form.date}
        />

        <Input
          name="time"
          onChange={handleChange}
          pattern={TIME_PATTERN}
          type="time"
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="duration">Duration</Label>
        <Input
          name="duration"
          onChange={handleChange}
          placeholder="[numbers here]"
          type="number"
          value={form.duration}
        />
      </Wrapper>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
