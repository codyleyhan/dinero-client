import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="main">
        <h1>
          <Link to="/">Dinero</Link>
          <br />
          <Link to="/dash">Dashboard</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
});

export default Main;
