import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createFlight } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FlightForm extends Component {

  state={
    date: ''
  }

  handleDateChange = (date) => {
   this.setState({
     date: date
   });
 }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
    );
  }

  onSubmit = (values) => {
    const stringified = (this.state.date._d.toLocaleDateString({day: '2-digit', month: '2-digit', year: 'numeric'}));
    const formattedDate = stringified.split('/')[2] + '/' + stringified.split('/')[0] + '/' + stringified.split('/')[1];
    const api_id = process.env.REACT_APP_FLIGHT_API_ID;
    const api_key = process.env.REACT_APP_FLIGHT_API_KEY;
    fetch(`https://api.flightstats.com/flex/schedules/rest/v1/json/flight/${values.airline}/${values.flightNumber}/departing/${formattedDate}?appId=${api_id}&appKey=${api_key}`)
      .then(res => res.json())
      .then(json => {
        this.props.createFlight({trip_id: this.props.trip.trip.id, departure_terminal: json.scheduledFlights[0].departureTerminal, arrival_airport: json.scheduledFlights[0].arrivalAirportFsCode, arrival_time: json.scheduledFlights[0].arrivalTime, airline: json.scheduledFlights[0].carrierFsCode, departure_airport: json.scheduledFlights[0].departureAirportFsCode, departure_time: json.scheduledFlights[0].departureTime, flight_number: json.scheduledFlights[0].flightNumber, stops: json.scheduledFlights[0].stops}, this.props.history)})}

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
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

      <div className ="ui teal ribbon label"><h2>New Flight:</h2></div><br></br><br></br>

      <form className="ui form" onSubmit = {handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label="Flight Number"
          name="flightNumber"
          component={this.renderField}
        />
      <div className="two fields">
      <label>Departure Date<DatePicker
          label="Departure Date"
          name="departureDate"
          selected={this.state.date}
          onChange={this.handleDateChange}
        /></label>
      <label>Airline<Field
          label="Airline"
          name="airline"
          component="select">
            <option></option>
              <option value='B6'>Jet Blue</option>
              <option value='WN'>Southwest</option>
              <option value='DL'>Delta</option>
              <option value='AA'>American</option>
              <option value='AS'>Alaska</option>
              <option value='UA'>United</option>
              <option value='VX'>Virgin</option>
          </Field></label>
        </div>
      <button type="submit" className="ui button">Submit</button>
      <Link to="/trip/{this.props.trip.trip.id}" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};
  if (!values.flightNumber) {
    errors.flightNumber = "Enter a flight number";
  }
  if (!values.departureDate) {
    errors.departureDate = "Enter a departure date";
  }
  if (!values.airline) {
    errors.airline = "Enter an airline";
  }
  return errors;
}

const mapStateToProps = state => ({
  trip: state.trips.active_trip,
  currentUser: state.auth.currentUser
});

export default reduxForm({
  validate,
  form: 'NewFlightForm'})(
    connect(mapStateToProps, { createFlight})(FlightForm));
