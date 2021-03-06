import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips, selectTrip } from '../actions/tripActions';
import { fetchUser } from '../actions';
import Trip from '../components/Trip';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

class Trips extends Component {

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id)
  }


  render() {
    return (!!this.props.trips ?  <div>
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
          <h1><img src="map-7.png" alt="" height='50px'></img>&nbsp;<img src="trips.png" alt="" height='50px'></img></h1>
          <br></br><br></br>
                {this.props.trips.map(trip =>
                  <Trip key={trip.trip.id} trip={trip.trip} />)}
                    <br></br><br></br><br></br>
                    <div className="ui teal button">
                      <Link to="/trips/new" style={ {color: '#FFF'} }><i className="plus icon"></i>Add a New Trip</Link>
                    </div>
                    <div className="ui blue button">
                    <Link to='/profile' style={ {color: '#FFF'} }><i className="left chevron icon"></i>Back to Profile</Link>
                    </div>
                  </div>
                    :
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
