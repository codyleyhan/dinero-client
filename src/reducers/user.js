const jwtDecode = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}


const userDefaultState = {
  loggedIn: false,
  loggingIn: false,
  token: '',
  username: '',
  role: '',
  email: '',
  id : -1,
  errors: {}
}

// get token from local storage
const token = localStorage.getItem('dinero-token');

if(token) { // if token then set defaults
  userDefaultState.token = token;
  let tokenPayload = jwtDecode(token);
  userDefaultState.loggedIn = true;
  userDefaultState.username = tokenPayload.username;
  userDefaultState.role = tokenPayload.role;
  userDefaultState.email = tokenPayload.email;
  userDefaultState.id = tokenPayload.id;
}


const user = (state=userDefaultState, action) => {
  switch(action.type) {
    case 'POSTING_USER':
      return {
        ...state,
        loggingIn: true,
        errors: {}
      };

    case 'LOGIN_SUCCESS':
      const payload = jwtDecode(action.token)

      localStorage.setItem('dinero-token', action.token);

      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        token: action.token,
        username: payload.username,
        role: payload.role,
        email: payload.email,
        id: payload.id,
        errors: {}
      };

    case 'LOGIN_ERROR':
      return {
        ...state,
        loggingIn: false,
        errors: action.errors
      };

    case 'LOGOUT_USER':
      localStorage.removeItem('dinero-token');

      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        token: '',
        username: '',
        role: '',
        email: '',
        id : -1,
        errors: {}
      };

    default:
      return state;
  }
}


export default user;

export {
  userDefaultState
};
