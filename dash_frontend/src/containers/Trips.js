import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrips, selectTrip } from '../actions/tripActions';
import { fetchUser } from '../actions';
import Trip from '../components/Trip';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Grid } from "semantic-ui-react";
import withAuth from '../hocs/withAuth';

class Trips extends Component {

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id)
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.newTrip) {
  //     this.props.trips.unshift(nextProps.newTrip);
  //   }
  // }

  render() {
    return (!!this.props.trips ?  <div>
      <div class="ui right floated button" onClick={e => {
                  e.preventDefault();
                  this.props.logoutUser();
                }}><i class="user circle icon"></i>Sign Out</div>
        <div className="ui menu">
        <div className="item">
          <Link to="/trips/new">Make a New Trip</Link>
        </div>
        <div className="item">
        <Link to='/profile' className="btn btn-primary">Back to Profile</Link>
        </div>

        </div>
                <h1><i class="paper plane outline icon"></i>Trips</h1>
                {this.props.trips.map(trip =>
                  <Trip key={trip.trip.id} trip={trip.trip} selectTrip={this.props.selectTrip}/>)}

            </div>  :
          <div>Loading</div>
        );
}
}

// <div onClick={this.handleClick(trip.trip)}>
//   <Link to='/trip'>{trip.trip.name}</Link>
//   <div>Origin: {trip.trip.origin}</div>
//   <div>Destination: {trip.trip.destination}</div>
// </div>)
// Trips.propTypes = {
//   fetchTrips: PropTypes.func.isRequired,
//   trips: PropTypes.array.isRequired,
// };

const mapStateToProps = state => ({
  trips: state.trips.items,
  currentUser: state.auth.currentUser,
  active_trip: state.trips.active_trip
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchTrips: fetchTrips, fetchUser: fetchUser, selectTrip: selectTrip}, dispatch)
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Trips));
