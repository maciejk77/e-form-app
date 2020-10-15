import React from 'react';
import { createPortal } from 'react-dom';
import useStyles from './styles';
import Button from '../Button';

import Row from '../Row';

const Modal = ({ children, onClick }) => {
  const classes = useStyles();
  const modal = (
    <>
      <div className={classes.overlayStyle} />

      <div className={classes.modalStyle}>
        <div className={classes.modalContainerStyle}>
          <div className={classes.mainHeader}>{children}</div>
          <div className={classes.button}>
            <Button label="ADD MORE" type="text" onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );

  const node = document.getElementById('modal');

  return createPortal(modal, node);
};

export default Modal;
