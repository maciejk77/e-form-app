import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Label from '../Label';
import Wrapper from '../Wrapper';

const Confirmation = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    console.clear();
    history.push('/');
  };

  return (
    <Wrapper>
      <div style={styles.inlineStyles}>
        <Button onClick={handleClick} label="Back" />
        <Label>SUCCESS!</Label>
        <Label>Thank you for your submission!</Label>
        <Label>Click above to come back to events form</Label>
      </div>
    </Wrapper>
  );
};

const styles = {
  inlineStyles: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '200px 0',
  },
};

export default Confirmation;
