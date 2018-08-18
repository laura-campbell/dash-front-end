import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../actions/tripActions';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';

class FlightDetails extends React.Component {

  componentDidMount() {
    this.props.fetchFlights(this.props.id);
  }

  render() {
    return (
      (!this.props.flights) ? null :
      (<div><div className="ui cards">
       {this.props.flights.map(flight => {
         return (
         <div className="card" key={flight.flight.id}>
         <div className="content">
          <h3 className="ui top attached centered header">{flight.flight.departure_airport}&nbsp;&nbsp;&nbsp;<i className="long arrow alternate right icon" />{flight.flight.arrival_airport}</h3>
          <div className="ui attached segment">
            <table className="ui celled table">
               <tbody>
                 <tr>
                   <td>
                     <div className="ui ribbon label">Date</div>
                   </td>
                   <td>{new Date(flight.flight.departure_time).toLocaleDateString()}</td>
                 </tr>
                 <tr>
                   <td>
                     <div className="ui ribbon label">Flight #</div>
                   </td>
                   <td>{flight.flight.flight_number}</td>
                 </tr>
                 <tr>
                   <td><div className="ui ribbon label">Airline</div></td>
                   <td>{flight.flight.airline}</td>
                 </tr>
                 <tr>
                   <td><div className="ui ribbon label">Departs at</div></td>
                   <td>{new Date(flight.flight.departure_time).toLocaleTimeString().replace(/:\d{2}\s/,' ')}</td>
                 </tr>
                 <tr>
                   <td><div className="ui ribbon label">Arrives at</div></td>
                   <td>{new Date(flight.flight.arrival_time).toLocaleTimeString().replace(/:\d{2}\s/,' ')}</td>
                 </tr>
                 <tr>
                   <td><div className="ui ribbon label">Terminal</div></td>
                   <td>{flight.flight.departure_terminal}</td>
                 </tr>
                 <tr>
                   <td><div className="ui ribbon label">Stops</div></td>
                   <td>{flight.flight.stops}</td>
                 </tr>
               </tbody>
             </table>

            <button className="ui labeled icon button">
              <i className="calendar alternate outline icon"></i>
          <AddToCalendar event={{title: `Flight from ${flight.flight.departure_airport} to ${flight.flight.arrival_airport}`, location: `Terminal ${flight.flight.departure_terminal}`, startTime: `${moment(Date.parse(flight.flight.departure_time)).format()}`, endTime: `${moment(Date.parse(flight.flight.arrival_time)).format()}`}} />
          </button>
          </div>
       </div>
     </div>
       )
       })}</div>
       <br></br><br></br>
       <div>
       <button className="ui labeled icon button">
         <i className="plus icon"></i>
         <Link to='/newflight'>Add a Flight</Link>
       </button></div>
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
