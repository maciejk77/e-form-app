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

  const coordinators = useSelector((state) => state.coordinators);
  const categories = useSelector((state) => state.categories);

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="coordinator">Coordinators</Label>
        <Select
          error={errors.coordinator}
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
          error={errors.title}
          onChange={handleChange}
          placeholder="[text here]"
          name="title"
          type="text"
          value={form.title}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="description">Description</Label>{' '}
        <Textarea
          error={errors.description}
          onChange={handleChange}
          placeholder="[text here]"
          name="description"
          maxLength={140}
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
        <>
          <Wrapper>
            <Label htmlFor="event_fee">Event Fee</Label>
            <Input
              error={errors.event_fee}
              onChange={handleChange}
              placeholder="[numbers here]"
              name="event_fee"
              type="number"
              value={form.event_fee}
            />
          </Wrapper>
        </>
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
          error={errors.date}
          onChange={handleChange}
          name="date"
          pattern={DATE_PATTERN}
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

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
