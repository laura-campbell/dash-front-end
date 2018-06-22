import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../actions/tripActions';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment'

class FlightDetails extends React.Component {

  componentDidMount() {
    this.props.fetchFlights(this.props.active_trip.trip.id);
  }

  render() {
    console.log(this.props.active_trip)
    return (
      (!this.props.active_trip.trip) ? null :
      (<div class="ui cards">
       {this.props.flights.map(flight => {
         return (
         <div class="card">
         <div class="content">
          <h3 class="ui top attached centered header">{flight.flight.departure_airport}&nbsp;&nbsp;&nbsp;<i class="long arrow alternate right icon" />{flight.flight.arrival_airport}</h3>
          <div class="ui attached segment">
            <table class="ui celled table">
               <tbody>
                 <tr>
                   <td>
                     <div class="ui ribbon label">Date</div>
                   </td>
                   <td>{new Date(flight.flight.departure_time).toLocaleDateString()}</td>
                 </tr>
                 <tr>
                   <td>
                     <div class="ui ribbon label">Flight #</div>
                   </td>
                   <td>{flight.flight.flight_number}</td>
                 </tr>
                 <tr>
                   <td><div class="ui ribbon label">Airline</div></td>
                   <td>{flight.flight.airline}</td>
                 </tr>
                 <tr>
                   <td><div class="ui ribbon label">Departs at</div></td>
                   <td>{new Date(flight.flight.departure_time).toLocaleTimeString().replace(/:\d{2}\s/,' ')}</td>
                 </tr>
                 <tr>
                   <td><div class="ui ribbon label">Arrives at</div></td>
                   <td>{new Date(flight.flight.arrival_time).toLocaleTimeString().replace(/:\d{2}\s/,' ')}</td>
                 </tr>
                 <tr>
                   <td><div class="ui ribbon label">Terminal</div></td>
                   <td>{flight.flight.departure_terminal}</td>
                 </tr>
                 <tr>
                   <td><div class="ui ribbon label">Stops</div></td>
                   <td>{flight.flight.stops}</td>
                 </tr>
               </tbody>
             </table>

            <button class="ui labeled icon button">
              <i class="calendar alternate outline icon"></i>
          <AddToCalendar event={{title: `Flight from ${flight.flight.departure_airport} to ${flight.flight.arrival_airport}`, location: `Terminal ${flight.flight.departure_terminal}`, startTime: `${moment(flight.flight.departure_time).format()}`, endTime: `${moment(flight.flight.arrival_time).format()}`}} />
          </button>
          </div>
       </div>
     </div>
       )
       })}
      </div>)
      );
    }
  }
// const mapStateToProps = state =>
//   ({
//     trip: state.active_trip
//   });

const mapStateToProps = state => ({
  flights: state.flights.items,
  currentUser: state.auth.currentUser,
  active_trip: state.trips.active_trip
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchFlights: fetchFlights}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
