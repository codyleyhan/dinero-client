import React from 'react';
import { Route, IndexRoute } from 'react-router';

import components from '../components';
import actions from '../actions';

export const getRoutes = (store) => {
  const authRequired = (nextState, replace) => {
    const state = store.getState();

    if(!state.user.loggedIn) {
      replace('/error/401')
    }
  }

  const mustBeLoggedOut = (nextState, replace) => {
    const state = store.getState();
    if(state.user.loggedIn) {
      replace('/dash');
    }
  }

  const getRestaurants = (nextState,replace) => {
    authRequired(nextState, replace);
    const state = store.getState();
    store.dispatch(actions.getRestaurants(state));
  }

  const getRestaurant = (nextState,replace) => {
    authRequired(nextState, replace);
    const state = store.getState();

    const restaurant = {
      user: state.user,
      id: nextState.params.id
    }

    store.dispatch(actions.getRestaurant(restaurant));
  }

  return (
    <Route path="/" component={components.App}>
      <IndexRoute component={components.Welcome} />
      <Route path="/dash" component={components.UserModal} onEnter={authRequired} />
      <Route path="/register" component={components.RegisterModal} onEnter={mustBeLoggedOut} />
      <Route path="/login" component={components.LoginModal} onEnter={mustBeLoggedOut} />
      <Route path="/restaurants" component={components.Restaurants} onEnter={getRestaurants} />
      <Route path="/restaurants/:id" component={components.RestaurantPage} onEnter={getRestaurant} />
      <Route path="/error/404" component={components.NotFound} />
      <Route path="/error/:errorCode" component={components.ErrorPage} />
      <Route path="*" component={components.NotFound} />
    </Route>
  );
}

export default getRoutes;
