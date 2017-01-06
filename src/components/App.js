import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import actions from '../actions';
import Main from './Main';


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions.userActions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
