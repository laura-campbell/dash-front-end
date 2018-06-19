import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Trips from './containers/Trips';
import TripForm from './components/Tripform';
import Login from './components/Login';
import Profile from './components/Profile';
import rootReducer from './reducers';
import App from './App';
import Trip from './components/Trip';
import TripDetails from './components/Tripdetails';
import FlightForm from './components/Flightform';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/trips/new" component={TripForm} />
          <Route path="/newflight" component={FlightForm} />
          <Route path="/trips" component={Trips} />
          <Route path="/trip/:tripId" component={TripDetails} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
