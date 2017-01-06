import React from 'react';


let RegisterModal = React.createClass({
  getInitialState() {
    console.log(this.props);
    return {
      email: '',
      username: '',
      name: '',
      password: '',
      confirm_password: '',
      errors: {}
    }
  },

  render() {
    return (
      <div>
        <h1>Register</h1>
        <label>Email</label>
        <input type="email" value={this.state.email} placeholder="Email Address" onChange={(e) => {
          this.setState({
            ...this.state,
            email: e.target.value
          });
        }} />
        <br />
        <label>Username</label>
        <input value={this.state.username} placeholder="Username " onChange={(e) => {
          this.setState({
            ...this.state,
            username: e.target.value
          });
        }} />
        <br />
        <label>Name</label>
        <input value={this.state.name} placeholder="Name" onChange={(e) => {
          this.setState({
            ...this.state,
            name: e.target.value
          });
        }}  />
        <br />
        <label>Password</label>
        <input type="password" value={this.state.password} placeholder="Password" onChange={(e) => {
          this.setState({
            ...this.state,
            password: e.target.value
          });
        }}  />
        <br />
        <label>Confirm Password</label>
        <input type="password" value={this.state.confirm_password} placeholder="Confirm your password" onChange={(e) => {
          this.setState({
            ...this.state,
            confirm_password: e.target.value
          });
        }}  />
        <button onClick={(e) => {
          e.preventDefault();
          this.props.registerUser(this.state);
        }}>Submit</button>
      </div>
    )
  }
});

RegisterModal.propTypes = {
  registerUser: React.PropTypes.func
}

export default RegisterModal;
