import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <div style={inlineStyles.app}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1 style={inlineStyles.header}>events form</h1>
            <Form />
          </Route>
          <Route path="/confirmation" exact component={Confirmation} />
        </Switch>
      </Router>
    </div>
  );
};

const inlineStyles = {
  app: {
    backgroundColor: '#7A59E4',
    color: '#F8DD74',
    padding: '20px',
    margin: '0 auto',
    maxWidth: '768px',
    minWidth: '204px',
  },
  header: {
    alignSelf: 'center',
    display: 'flex',
    fontFamily: 'BioRhyme',
    fontSize: '65px',
    lineHight: '60px',
    marginBottom: '15px',
    padding: '2px 5px',
  },
};

export default App;
