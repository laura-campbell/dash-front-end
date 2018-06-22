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
  console.log(this.props.currentUser)
  return (
      <div>
      {this.props.currentUser.id ? (
        <div>
          <div class="ui right floated left labeled button" tabindex="0">
          <label class="ui basic right pointing label">
            <i class="user icon"></i> {this.props.currentUser.username}
          </label>
          <div class="ui right floated button" onClick={e => {
              e.preventDefault();
              this.props.logoutUser();
            }}>
              Logout
              </div>
            </div>
                  <h1 class="ui header">
                    <i class="compass outline icon"></i>
                    <div class="content">
                      <img src='dash_simple.png' height='60px'></img>
                    </div>
                  </h1>
                <br></br><br></br><br></br><br></br><br></br>
                <div class="ui three cards">
                <a class="ui card" href="/trips">
                  <div class="image">
                    <img src="map.png"></img>
                  </div>
                    <div class="content">
                      <div class="center aligned header">see my trips</div>
                    </div>
                  </a>

                  <a class="ui card" href="/trips/new">
                    <div class="image">
                      <img src="addtrip.png"></img>
                    </div>
                      <div class="content">
                        <div class="center aligned header">add a new trip</div>
                      </div>
                    </a>

                    <a class="ui card" href="/calendar">
                      <div class="image">
                        <img src="calendar.png"></img>
                      </div>
                        <div class="content">
                          <div class="center aligned header">see my calendar</div>
                        </div>
                      </a>
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
