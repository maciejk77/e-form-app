import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    overlayStyle: {
      position: 'absolute',

      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray',
      opacity: 0.95,
      height: 1000,
    },
    modalStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      top: 80,

      background: '#f8dd74;',
      borderRadius: '2px',
      // display: 'inline-block',
      // margin: '1rem',

      position: 'absolute',
      minWidth: '100%',
      minHeight: '60%',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
    modalContainerStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    mainHeader: { fontSize: '55px' },
    button: { paddingTop: '50px' },
  }),
  { name: 'modal' }
);
