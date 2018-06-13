import React from 'react';
import { connect } from 'react-redux'

class Trip extends React.Component {
  render() {
    if (!this.props.trip) {
      return <div>Select a trip to see it's details.</div>
      }
    return (
      <div>
        <h1>Trip Details</h1>
        <div>{this.props.trip.name}</div>
      </div>
      );
    }
  }

const mapStateToProps = state =>
  ({
    trip: state.active_trip
  });

export default connect (mapStateToProps)(Trip);
