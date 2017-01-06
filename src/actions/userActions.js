import axios from 'axios';
import config from '../config';

export function registerUser({username, password, email, name}) {
  return (dispatch) => {
    const postParams = {
      username,
      password,
      email,
      name
    }
    dispatch(postingUser());

    axios.post(config.baseUrl+'/auth/register', postParams)
      .then((response) => {
        dispatch(loginSuccess({ token: response.data.data.token }));
      })
      .catch((error) => {
        dispatch(loginError(error.response.data));
      });
  }
}

export function postingUser() {
  return {
    type: 'POSTING_USER'
  }
}

export function loginUser({email, password}) {
  return (dispatch) => {
    const postParams = {
      password,
      email,
    }
    dispatch(postingUser());

    axios.post(config.baseUrl+'/auth/login', postParams)
      .then((response) => {
        dispatch(loginSuccess({ token: response.data.data.token }));
      })
      .catch((error) => {
        dispatch(loginError(error.response.data));
      });
  }
}

export function logout() {
  return {
    type: 'LOGOUT_USER'
  };
}

export function loginSuccess({token}) {
  return {
    type: 'LOGIN_SUCCESS',
    token
  }
}

export function loginError({errors}) {
  return {
    type: 'LOGIN_ERROR',
    errors
  }
}
