import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router';
import { logout } from '../actions/auth'

const Navbar = ({ auth, logout }) => {

  if (!auth) {
    return null
  }

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <IndexLink className="navbar-brand" to="/">Todo App</IndexLink>
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-right">
            <button type="button" className="btn btn-default navbar-btn" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
