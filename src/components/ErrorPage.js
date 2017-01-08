import React from 'react';
import { Link } from 'react-router';


const ErrorPage = (props) => {
  const renderErrorPage = (status) => {
    switch(status) {
      case '403':
        return (
          <p>
            You are not allowed to use this route...
          </p>
        )
      case '401':
        return (
          <p>
            You should <Link to='/login'>login</Link>...
          </p>
        )
      default:
        return (
          <p>
            Well this is embarassing...
            We will try to fix that...
          </p>
        )
    }
  }

  return (
    <div>
      <h2>There was a problem...</h2>
      {renderErrorPage(props.params.errorCode)}
    </div>
  )
}

export default ErrorPage;
