import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Profile from './components/Profile';
import * as actions from './actions';
import Trips from './containers/Trips';
import TripForm from './components/Tripform';
import './index.css';

class App extends Component {
  render() {
    return (
        <div>
        <h1 class="ui header">
          <i class="compass outline icon"></i>
          <div class="content">
            <img src='dash_simple.png' height='60px'></img>
            </div>
        </h1>
      <div className="background" id="Homepage">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <div id="centered">
      <div class="ui massive buttons">
      <button class="ui teal button"><Link to="/login" style={{ color: '#FFF' }}>Login</Link></button>
      <div class="or"></div>
      <button class="ui blue button"><Link to='/signup' style={{ color: '#FFF' }}>Signup</Link>
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
