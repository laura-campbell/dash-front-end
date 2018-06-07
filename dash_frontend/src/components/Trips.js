import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/tripActions';

class Trips extends Component {

  componentWillMount() {
    this.props.fetchTrips();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newTrip) {
      this.props.trips.unshift(nextProps.newTrip);
    }
  }

  render() {
    const tripItems = this.props.trips.map(trip => (
      <div key={trip.id}>
        <h3>{trip.name}</h3>
        <p>{trip.origin} - {trip.destination}</p>
      </div>
    ));
    return(
      <div>
        <h1>Trips</h1>
        {tripItems}
      </div>
    )
  }
}

Trips.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newTrip: PropTypes.object
};

const mapStateToProps = state => ({
  trips: state.trips.items,
  newTrip: state.trips.item
})

export default connect(mapStateToProps, { fetchTrips })(Trips);
