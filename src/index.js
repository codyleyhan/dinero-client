import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';


import App from './components/App';
import Welcome from './components/Welcome';
import UserModal from './components/UserModal';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

import store, { history } from './store';
import './styles/index.css';



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/dash" component={UserModal} />
        <Route path="/register" component={RegisterModal} />
        <Route path="/login" component={LoginModal} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
