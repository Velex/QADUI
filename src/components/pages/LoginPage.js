import React from 'react'
import LoginFormContainer from '../../containers/LoginFormContainer'
import logo from '../images/homepage.png';
import '../styles/LoginPage.css'

const LoginPage = () => (
	<div className="row">
		<span id="imageContainer">
			<img src={logo} />
		</span>
		<div className="errorblock"></div>
		<div className="" id="formContainer">
			<h3>Sign in to QAD</h3>
			<LoginFormContainer />
		</div>
		<div className=""></div>
	</div>
)

export default LoginPage
