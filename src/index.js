import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import LoginCard from './containers/Login/LoginCard';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={LoginCard} />
        <Route exact path="/app" component={App} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
