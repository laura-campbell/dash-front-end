import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/tripActions';
import Trip from '../components/Trip'

class Trips extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTrips(this.props.currentUser.id));
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
            {this.props.trips.map(trip =>

              <Trip trip={trip.trip}/>)}
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
  trip: state.trips.item,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Trips);
