import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/auth'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login({
    login: credentials.email,
    password: credentials.password
  }))
})

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer
