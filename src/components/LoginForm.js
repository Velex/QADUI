import React, { PropTypes } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Username is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid username format'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  }

  return errors
}

const renderField = ({ input, label, type, placeholder, id, meta: { touched, error } }) => {
  return (
    <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
      <label className="control-label" htmlFor={input.name}>{label}</label>
      <input className="" id={id} placeholder={placeholder} type={type} {...input}/>
      <span className="help-block">{touched && error}</span>
    </div>
  )
}

const LoginForm = ({ error, handleSubmit, pristine, reset, submitting, login }) => {

  const loginEx = (values) => {
    return login(values)
      .then(
        () => {
        },
        err => {
          throw new SubmissionError({
            email: ' ',
            password: ' ',
            _error: err.response.data.message
          })
        })
  }

  return (
    <form noValidate id="loginForm" onSubmit={handleSubmit(loginEx)}>
      {error && <p className="bg-danger" style={{padding: '15px'}}>{error}</p>}
      <Field
        name="email"
        component={renderField}
        type="email"
        label="Username"
        id="username"
        placeholder=""/>
      <Field
        name="password"
        component={renderField}
        type="password"
        label="Password"
        id="password"
        placeholder=""/>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={pristine || submitting}
      >Sign In
      </button>
    </form>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)
