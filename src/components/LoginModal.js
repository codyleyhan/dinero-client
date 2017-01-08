import React from 'react';

import Errors from './Errors';

let LoginModal = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      errors: {...this.props.user.errors}
    }
  },

  componentDidUpdate() {
    if(this.props.user.loggedIn) {
      this.props.router.push('/dash');
    }
  },

  renderErrors() {
    let errors = Object.keys(this.props.user.errors).map((key, i) => {
      return (
        <div key={i}>
          <h3>{key}</h3>
          {this.props.user.errors[key].map((err, i) => {
            return <div key={i} >- {err}</div>
          })}
        </div>
      )
    });

    return errors;
  },

  render() {
    const { loggingIn, loginUser } = this.props;
    const { errors } = this.props.user;

    return (
      <div>
        <h1>Login</h1>
        <Errors errors={errors} />
        <label>Email</label>
        <input type="email" value={this.state.email} placeholder="Email Address" onChange={(e) => {
          this.setState({
            ...this.state,
            email: e.target.value
          });
        }} />
        <br />

        <label>Password</label>
        <input type="password" value={this.state.password} placeholder="Password" onChange={(e) => {
          this.setState({
            ...this.state,
            password: e.target.value
          });
        }}  />
        <br />
        {
          loggingIn ?
            (<button disabled>
              Logging In <span className="loader">Loading...</span>;
            </button>)
            :
            (
              <button onClick={(e) => {
                e.preventDefault();
                loginUser(this.state);
              }}>
                Submit
              </button>
            )
        }
      </div>
    )
  }
});

LoginModal.propTypes = {
  loginUser: React.PropTypes.func,
  user: React.PropTypes.object
}

export default LoginModal;
