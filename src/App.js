import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookTicket from './components/BookTicket';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowList} />
        <Route path="/summary/:showId" component={ShowSummary} />
        <Route path="/book/:showId" component={BookTicket} />
      </Switch>
    </Router>
  );
}

export default App;
