import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import { user, userDefaultState } from './user';
import { restaurants, restaurantsDefaultState } from './restaurants';

const rootReducer = combineReducers({user, restaurants, routing: routerReducer })


const defaultStates = {
  restaurants: restaurantsDefaultState,
  user: userDefaultState
}

export {
  defaultStates,
  rootReducer
}

export default rootReducer;
