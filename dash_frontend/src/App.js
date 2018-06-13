import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Profile from './components/Profile';
import * as actions from './actions';
import Trips from './containers/Trips';
import TripForm from './components/Tripform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to the App, you can't do anything unless you login</h2>
        <ul>
          <li>
            {this.props.loggedIn ? (
              <a
                onClick={e => {
                  e.preventDefault();
                  this.props.logoutUser();
                }}
              >
                Sign Out
              </a>
            ) : (
              <Link to="/login">Go to Login</Link>
            )}
          </li>
          <li>
            <Link to="/profile">Go to Profile</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/trips" component={Trips} />
          <Route path="/newtrip" component={TripForm} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, actions)(App);
