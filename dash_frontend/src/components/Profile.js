import React from 'react';
import withAuth from '../hocs/withAuth';
import {connect} from 'react-redux';
import Trips from '../containers/Trips';
import { Redirect } from "react-router";
import Tripform from './Tripform';
import Trip from './Trip';
import { Link, Switch, Route } from 'react-router-dom';
import { Grid } from "semantic-ui-react";


class Profile extends React.Component {

render() {
  return (
      <div>
      {this.props.currentUser.id ? (
        <div>
        <h1>Welcome {this.props.currentUser.username}!<div class="ui right floated button" onClick={e => {
                    e.preventDefault();
                    this.props.logoutUser();
                  }}><i class="user circle icon"></i>Sign Out</div></h1>
                <div class="ui vertical menu">
            <div class="link item">
            <Link to="/trips">See my Trips</Link>
          </div>
          <div class="link item">
            <Link to="/trips/new">Make a New Trip</Link>
          </div>
      </div>
      </div>
    ) : (
        <Redirect to="/login" />
      )
    }
  </div>)
}}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser,
});

export default withAuth(connect(mapStateToProps)(Profile));
