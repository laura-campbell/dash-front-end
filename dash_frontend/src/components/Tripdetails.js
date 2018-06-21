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

            <h4 class="ui horizontal divider header">
              <i class="paperclip icon"></i>
              Itinerary
            </h4>
                  <div class="content"> Dates: {new Date(this.props.active_trip.trip.start_date).toDateString()} <i class="caret right icon"></i>{new Date(this.props.active_trip.trip.end_date).toDateString()}
                  <br></br>
                  Length of Trip: {moment(this.props.active_trip.trip.end_date).diff(moment(this.props.active_trip.trip.start_date), 'days')} days
                  </div>

                  {this.props.active_itinerary.itinerary ?
                  console.log(this.props.active_itinerary)
                  : <Itinerary length={moment(this.props.active_trip.trip.end_date).diff(moment(this.props.active_trip.trip.start_date), 'days')} />
                  }


            <h4 class="ui horizontal divider header">
              <i class="list icon"></i>
              Packing List
            </h4>

            <h4 class="ui horizontal divider header">
              <i class="plane icon"></i>
              Flight Information
            </h4>
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
  active_itinerary: state.trips.active_itinerary
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchFlights: fetchFlights, selectTrip: selectTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);
