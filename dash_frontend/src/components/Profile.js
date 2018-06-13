import React from 'react';
import withAuth from '../hocs/withAuth';
import {connect} from 'react-redux';
import Trips from '../containers/Trips';
import { Redirect } from "react-router";
import Tripform from './Tripform';
import Trip from './Trip';
import { Link, Switch, Route } from 'react-router-dom';


class Profile extends React.Component {

render() {
  return (
    <div>
      <h1>Welcome {this.props.currentUser.username}</h1>
      {this.props.currentUser.id ? (
        <div>
          <ul>
            <li>
              <Link to="/trips">See my Trips</Link>
            </li>
            <li>
              <Link to="/newtrip">Make a New Trip</Link>
            </li>
          </ul>
        </div>
      ) : (
        <Redirect to="/login" />
      )
    }
    </div>
  );
}}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser,
});

export default withAuth(connect(mapStateToProps)(Profile));
