import React from 'react';
import { fetchFlights, selectTrip } from '../actions/tripActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Flightform from './Flightform';
import { Link } from 'react-router-dom';
import FlightDetails from './Flightdetails';
import moment from 'moment';
import Itinerary from './Itinerary';


class TripDetails extends React.Component {

  componentDidMount() {
    this.props.selectTrip(this.props.match.params.tripId);
    this.props.fetchFlights(this.props.match.params.tripId)
  }

  render() {
    return (
      (!this.props.active_trip.trip) ? null :
      (<div>
        <button class="ui right floated button">
          <i class="left arrow icon"></i>
          <Link to='/profile'>Back to Profile</Link>
        </button>

        <h1 class="ui header">
          <i class="bookmark outline icon"></i>
            {this.props.active_trip.trip.name}
          </h1>

            <h3 class="ui horizontal divider header">
              <i class="paperclip icon"></i>
              Itinerary
            </h3>
                  <div class="ui vertical segments">
                    <div class="ui teal segment">
                      <h4 class="ui header">Dates:&nbsp;&nbsp;&nbsp;&nbsp; {new Date(this.props.active_trip.trip.start_date).toDateString()}  <i class="caret right icon"></i>{new Date(this.props.active_trip.trip.end_date).toDateString()}</h4>
                  </div>
                <div class="ui teal segment"><h4 class="ui header">Length of Trip:&nbsp;&nbsp;&nbsp;&nbsp; {moment(this.props.active_trip.trip.end_date).diff(moment(this.props.active_trip.trip.start_date), 'days')} days
                </h4></div></div>

                  {this.props.active_itinerary.itinerary ?
                  console.log(this.props.active_itinerary)
                  : <div class="ui blue segment"><Itinerary length={moment(this.props.active_trip.trip.end_date).diff(moment(this.props.active_trip.trip.start_date), 'days')} /></div>
                  }



            <h3 class="ui horizontal divider header">
              <i class="plane icon"></i>
              Flight Information
            </h3>
        <FlightDetails />
        <br></br>
          <button class="ui labeled icon button">
            <i class="left arrow icon"></i>
            <Link to='/trips'>Back to All Trips</Link>
          </button>
          <button class="ui labeled icon button">
            <i class="plus icon"></i>
            <Link to='/newflight'>Add a Flight</Link>
          </button>
      </div>)
      );
    }
  }
// const mapStateToProps = state =>
//   ({
//     trip: state.active_trip
//   });

const mapStateToProps = state => ({
  active_trip: state.trips.active_trip,
  currentUser: state.auth.currentUser,
  flight: state.flights.item,
  flights: state.flights.items,
  active_itinerary: state.trips.day
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchFlights: fetchFlights, selectTrip: selectTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
