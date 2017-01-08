import axios from 'axios';
import { push } from 'react-router-redux';

import config from '../config';


export function getRestaurants({ user }) {
  return dispatch => {
    dispatch({type: 'FETCHING_RESTAURANTS'});

    if(!user.loggedIn) {
      dispatch(fetchRestaurantsError());
      return dispatch(push('/error/401'));
    }

    const getParams = {
      method: 'GET',
      headers : {
        'Authorization' : `Bearer ${user.token}`
      }
    }

    axios.get(config.baseUrl+ '/restaurants/', getParams)
      .then(res => {
        dispatch(fetchRestaurantsSuccess(res.data));
      })
      .catch(err => {
        if(err.response.status !== 400) {
          dispatch(push('/error/' + err.response.status));
        } else {
          dispatch(fetchRestaurantsError(err.response.data))
        }
      });
  }
}

export function getRestaurant({ user, id }) {
  return dispatch => {
    dispatch({type: 'FETCHING_RESTAURANT'});

    if(!user.loggedIn) {
      dispatch(fetchRestaurantError());
      return dispatch(push('/error/401'));
    }

    const getParams = {
      method: 'GET',
      headers : {
        'Authorization' : `Bearer ${user.token}`
      }
    }

    axios.get(config.baseUrl+ '/restaurants/' + id, getParams)
      .then(res => {
        dispatch(fetchRestaurantSuccess(res.data));
      })
      .catch(err => {
        if(err.response.status !== 400) {
          dispatch(push('/error/' + err.response.status));
        } else {
          dispatch(fetchRestaurantError(err.response.data))
        }
      });
  }
}

export function createRestaurant({ restaurant_number, name, address, user }) {
  return dispatch => {
    dispatch({type: 'POSTING_RESTAURANT'});

    const postParams = {
      method: 'POST',
      url: config.baseUrl+ '/restaurants/',
      headers: {
        'Authorization' : `Bearer ${user.token}`
      },
      data: {
        restaurant_number,
        name,
        address
      }
    };

    axios(postParams)
      .then(res => {
        dispatch(postRestaurantSuccess(res.data));
        return dispatch(push('/restaurants' + res.data.restaurant.id));
      })
      .catch(err => {
        if(err.response.status !== 400) {
          dispatch(push('/error/' + err.response.status));
          dispatch(postRestaurantError(err.response.data));
        } else {
          dispatch(postRestaurantError(err.response.data));
        }
      });
  }
}

function postRestaurantError({ errors }) {
  return {
    type: 'POST_RESTAURANT_ERROR',
    errors
  }
}

function postRestaurantSuccess({ restaurant }) {
  return {
    type: 'POST_RESTAURANT_SUCCESS',
    restaurant
  }
}

function fetchRestaurantsError({ errors }) {
  return {
    type: 'FETCH_RESTAURANTS_ERROR',
    errors
  }
}

function fetchRestaurantsSuccess({ data, meta }) {
  return {
    type: 'FETCH_RESTAURANTS_SUCCESS',
    restaurants: data.restaurants,
    meta
  }
}

function fetchRestaurantError({ errors }) {
  return {
    type: 'FETCH_RESTAURANT_ERROR',
    errors
  }
}

function fetchRestaurantSuccess({ data }) {
  return {
    type: 'FETCH_RESTAURANT_SUCCESS',
    restaurant: data.restaurant,
  }
}
