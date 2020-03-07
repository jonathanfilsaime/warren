import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';git

const routing = (
    <Router>
      <div >
        <Route exact path="/" component={App} />
      </div>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));
