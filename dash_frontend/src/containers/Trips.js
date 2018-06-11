import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/tripActions';

class Trips extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTrips());
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.newTrip) {
  //     this.props.trips.unshift(nextProps.newTrip);
  //   }
  // }

  render() {
    return ((this.props.trips.length === 0) ? null :
          <div>
            <h1>Trips</h1>
            <div>{this.props.trips.map(trip => trip.trip.name)}</div>
          </div>
        );
}
}
// Trips.propTypes = {
//   fetchTrips: PropTypes.func.isRequired,
//   trips: PropTypes.array.isRequired,
//   newTrip: PropTypes.object
// };

const mapStateToProps = state => ({
  trips: state.trips.items,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Trips);
