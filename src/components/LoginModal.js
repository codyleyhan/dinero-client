import React from 'react';


let LoginModal = React.createClass({
  getInitialState() {
    return {
      email: '',
      password: '',
      errors: {...this.props.user.errors}
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
    return (
      <div>
        <h1>Login</h1>
        { this.renderErrors() }
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
        <button onClick={(e) => {
          e.preventDefault();
          this.props.loginUser(this.state);
        }}>Submit</button>
      </div>
    )
  }
});

LoginModal.propTypes = {
  loginUser: React.PropTypes.func,
  user: React.PropTypes.object
}

export default LoginModal;
