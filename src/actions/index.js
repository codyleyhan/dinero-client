import * as userActions from './userActions' ;
import * as restaurantActions from './restaurantActions';


const actions = {
  ...restaurantActions,
  ...userActions
}

export default actions;
