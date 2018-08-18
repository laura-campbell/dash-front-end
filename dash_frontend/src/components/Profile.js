import React from 'react';
import withAuth from '../hocs/withAuth';
import {connect} from 'react-redux';
import { Redirect } from "react-router";


class Profile extends React.Component {

render() {
  return (
      <div>
      {this.props.currentUser.id ? (
        <div>
          <div className="ui right floated left labeled button" tabIndex="0">
          <label className="ui basic right pointing label">
            <i className="user icon"></i> {this.props.currentUser.username}
          </label>
          <div className="ui right floated button" onClick={e => {
              e.preventDefault();
              this.props.logoutUser();
            }}>
              Logout
              </div>
            </div>
                  <h1 className="ui header">
                    <i className="compass outline icon"></i>
                    <div className="content">
                      <img src='dash_simple.png' alt="" height='60px'></img>
                    </div>
                  </h1>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="ui three cards">
                <a className="ui card" href="/trips">
                  <div className="image">
                    <img src="map.png" alt=""></img>
                  </div>
                    <div className="content">
                      <div className="center aligned header">see my trips</div>
                    </div>
                  </a>

                  <a className="ui card" href="/trips/new">
                    <div className="image">
                      <img src="addtrip.png" alt=""></img>
                    </div>
                      <div className="content">
                        <div className="center aligned header">add a new trip</div>
                      </div>
                    </a>

                    <a className="ui card" href="/calendar">
                      <div className="image">
                        <img src="calendar.png" alt=""></img>
                      </div>
                        <div className="content">
                          <div className="center aligned header">see my calendar</div>
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
