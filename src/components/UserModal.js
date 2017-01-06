import React from 'react';


const UserModal = ({ user, logout }) => {
  if(!user.loggedIn) {
    return (
      <div>
        <h2>You must login first.</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>{user.username.toUpperCase()}</h2>
      <div>Email: {user.email}</div>
      <div>id: {user.id}</div>
      <div>role: {user.role}</div>
      <div>Token: {user.token}</div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

UserModal.propTypes = {
  user: React.PropTypes.shape({
    loggedIn: React.PropTypes.bool.isRequired,
    loggingIn: React.PropTypes.bool.isRequired,
    token: React.PropTypes.string,
    username: React.PropTypes.string,
    role: React.PropTypes.string,
    email: React.PropTypes.string,
    id : React.PropTypes.number,
    errors: React.PropTypes.object
  }),
  logout: React.PropTypes.func
};

export default UserModal;
