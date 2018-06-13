import React , { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrips, selectTrip } from '../actions/tripActions';
import Trip from '../components/Trip';
import { bindActionCreators } from 'redux'

class Trips extends Component {

  componentWillMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.newTrip) {
  //     this.props.trips.unshift(nextProps.newTrip);
  //   }
  // }

  render() {
    console.log(this.props);
    return ((this.props.trips.length === 0) ? null :
          <div>
            <h1>Trips</h1>
            {this.props.trips.map(trip =>
                <div onClick={() => this.props.selectTrip(trip)}>
                  <h1>{trip.trip.name}</h1>
                  <div>Origin: {trip.trip.origin}</div>
                  <div>Destination: {trip.trip.destination}</div>
                </div>)}
          </div>
        );
}
}
// Trips.propTypes = {
//   fetchTrips: PropTypes.func.isRequired,
//   selectTrip: PropTypes.func.isRequired,
//   trips: PropTypes.array.isRequired,
//   newTrip: PropTypes.object
// };

const mapStateToProps = state => ({
  trips: state.trips.items,
  trip: state.trips.item,
  currentUser: state.auth.currentUser
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchTrips: fetchTrips, selectTrip: selectTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
