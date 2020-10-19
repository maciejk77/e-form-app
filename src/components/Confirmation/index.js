import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Label from '../Label';
import Wrapper from '../Wrapper';
import Container from './styles';

const Confirmation = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    console.clear();
    history.push('/');
  };

  return (
    <Wrapper>
      <Container>
        <Button onClick={handleClick} label="Back" />
        <Label>SUCCESS!</Label>
        <Label>Thank you for your submission!</Label>
        <Label>Click above to come back to events form</Label>
      </Container>
    </Wrapper>
  );
};

export default Confirmation;
