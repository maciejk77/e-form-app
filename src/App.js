import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './components/Form';
import Confirmation from './components/Confirmation';
import { StyledApp, StyledHeader } from './styles';

const App = () => {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <StyledHeader>events form</StyledHeader>
            <Form />
          </Route>
          <Route path="/confirmation" exact component={Confirmation} />
        </Switch>
      </Router>
    </StyledApp>
  );
};

export default App;
