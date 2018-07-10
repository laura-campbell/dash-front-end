import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import './index.css';

class App extends Component {
  render() {
    return (
        <div>
        <h1 className="ui header">
          <i className="compass outline icon"></i>
          <div className="content">
            <img src='dash_simple.png' alt="" height='60px'></img>
            </div>
        </h1>
      <div className="background" id="Homepage">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div id="centered">
      <div className="ui massive buttons">
      <button className="ui teal button"><Link to="/login" style={{ color: '#FFF' }}>Login</Link></button>
      <div className="or"></div>
      <button className="ui blue button"><Link to='/signup' style={{ color: '#FFF' }}>Signup</Link>
      </button>
    </div>
    </div>
  </div>
  </div>

    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, actions)(App);
