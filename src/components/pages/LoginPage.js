import React from 'react'
import LoginFormContainer from '../../containers/LoginFormContainer'
import '../styles/LoginPage.css'

const LoginPage = () => (
  <div className="row">
    <div className="col-xs-4"></div>
    <div className="col-xs-4">
      <h2>
        <small>
          User Login
        </small>
      </h2>
      <LoginFormContainer />
    </div>
    <div className="col-xs-4"></div>
  </div>
)

export default LoginPage
