import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Trips from './components/Trips';
import TripForm from './components/Tripform';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store'
import { Route, Link, NavLink, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/trips">Trips</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/newtrip">New Trip</NavLink>
              </li>
            </ul>
        </div>
        <hr />

          <Switch>
          <Route path="/login" exact component={ Home } />
          <Route path="/trips" exact component={ Trips } />
          <Route path="/newtrip" exact component={ TripForm } />
          </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;
