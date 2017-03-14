import React, { PropTypes } from 'react';
import LoadingBar from 'react-redux-loading-bar'
import Navbar from './Navbar'

const App = ({children}) => (
  <div>
    <LoadingBar style={{ zIndex: '999999' }} />
    <Navbar />
    <br/>
    <div className="container">
      {children}
    </div>
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App;
