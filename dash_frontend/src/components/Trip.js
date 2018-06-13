import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../actions';

class Trip extends React.Component {

  render() {
    if (!this.props.trip) {
      return <div>Select a trip to see it's details.</div>
      }
    return (
      <div>
        <h1>Trip Details</h1>
        <h1>{this.props.trip.trip.name}</h1>
      </div>
      );
    }
  }
const mapStateToProps = state =>
  ({
    trip: state.active_trip
  });
export default connect (mapStateToProps)(Trip);
