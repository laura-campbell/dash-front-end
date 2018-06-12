import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../actions';

class Trip extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.trip.name}</h1>
        <div>Origin: {this.props.trip.origin}</div>
        <div>Destination: {this.props.trip.destination}</div>
      </div>)}}

export default connect(null, actions)(Trip);
