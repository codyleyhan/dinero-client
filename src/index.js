import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import _ from 'lodash';


import store, { history } from './store';
import getRoutes from './routes';
import './styles/index.css';


window._ = _;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { getRoutes(store) }
    </Router>
  </Provider>,
  document.getElementById('root')
);
