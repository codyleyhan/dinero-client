import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import actions from '../actions';
import Main from './Main';


function mapStateToProps(state) {
  return {
    user: state.user,
    restaurants: state.restaurants
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
