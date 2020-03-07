import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const routing = (
    <Router>
      <div>
          <h1>Hello World</h1>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));
