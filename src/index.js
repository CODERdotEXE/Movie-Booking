import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookTicket from './components/BookTicket';
import './styles.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={ShowList} />
      <Route path="/summary/:showId" component={ShowSummary} />
      <Route path="/book/:showId" component={BookTicket} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
