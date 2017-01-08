import React from 'react';

const _ = window._;

const Errors = (props) => {
  const { errors } = props;

  if(_.isEmpty(errors)) {
    return null;
  }

  let errs = Object.keys(errors).map((key, i) => {
    return (
      <div key={i}>
        <h3>{key}</h3>
        {errors[key].map((err, index) => {
          return <div key={index} >- {err}</div>
        })}
      </div>
    )
  });

  return (
    <div>
      <h3>Errors:</h3>
      {errs}
    </div>
  )
}

Errors.propTypes = {
  errors: React.PropTypes.object
}

export default Errors;
