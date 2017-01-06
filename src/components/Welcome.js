import React from 'react';
import { Link } from 'react-router';



const Welcome = React.createClass({
  renderWelcomeMessage() {
    if(this.props.user.loggedIn) {
      return (
        <Link to="/dash">Dashboard</Link>
      )
    }

    return (
      <div>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    )
  },

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        { this.renderWelcomeMessage() }
      </div>
    )
  }
});

export default Welcome;
