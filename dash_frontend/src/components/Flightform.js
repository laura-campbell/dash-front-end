import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { createFlight } from '../actions/tripActions';

class FlightForm extends Component {

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
    console.log(values);
    console.log(this.props)
    const formattedDate = values.departureDate.split('/')[2] + '/' + values.departureDate.split('/')[0] + '/' + values.departureDate.split('/')[1];
    const api_id = process.env.REACT_APP_FLIGHT_API_ID;
    const api_key = process.env.REACT_APP_FLIGHT_API_KEY;
    fetch(`https://api.flightstats.com/flex/schedules/rest/v1/json/flight/${values.airline}/${values.flightNumber}/departing/${formattedDate}?appId=${api_id}&appKey=${api_key}`)
      .then(res => res.json())
      .then(json => {
        this.props.createFlight({trip_id: this.props.trip.trip.id, departure_terminal: json.scheduledFlights[0].departureTerminal, arrival_airport: json.scheduledFlights[0].arrivalAirportFsCode, arrival_time: json.scheduledFlights[0].arrivalTime, airline: json.scheduledFlights[0].carrierFsCode, departure_airport: json.scheduledFlights[0].departureAirportFsCode, departure_time: json.scheduledFlights[0].departureTime, flight_number: json.scheduledFlights[0].flightNumber, stops: json.scheduledFlights[0].stops}, this.props.history)})}

  //
  //   const flightValues = {trip_id: this.state.trip.id, departure_terminal: this.state.FlightResult[0].departureTerminal, arrival_airport: this.state.FlightResult[0].arrivalAirportFsCode, arrival_time: this.state.FlightResult[0].arrivalTime, airline: this.state.FlightResult[0].carrierFsCode, departure_airport: this.state.FlightResult[0].departureAirportFsCode, departure_time: this.state.FlightResult[0].departureTime, flight_number: this.state.FlightResult[0].flightNumber, stops: this.state.FlightResult[0].stops}
  //   console.log(flightValues);
  //   console.log(this.props);
  //   this.props.createFlight(flightValues, this.props.history);
  //   console.log(this.props)
  // }
  //
  //
  //
  // handleFlightFetch() {
  //   fetch(`https://api.flightstats.com/flex/schedules/rest/v1/json/flight/${this.state.outboundAirline}/${this.state.outboundFlightNumber}/departing/${outDepDate}?appId=fd91127b&appKey=9cbe3a0eb8d980090fe8566265f1cf86`)
  //     .then(res => res.json())
  //     .then(json => {
  //         this.setState({ outboundFlightResult: json.scheduledFlights })})}

      //
      // handleReturnFlightFetch() {
      //   const retDepArray = this.state.returnDepartureDate.split('/');
      //   const retDepDate = retDepArray[2] + '/' + retDepArray[0] + '/' + retDepArray[1];
      //   fetch(`https://api.flightstats.com/flex/schedules/rest/v1/json/flight/${this.state.returnAirline}/${this.state.returnFlightNumber}/departing/${retDepDate}?appId=fd91127b&appKey=9cbe3a0eb8d980090fe8566265f1cf86`)
      //   .then(res => res.json())
      //   .then(json => {
      //       this.setState({ returnFlightResult: json.scheduledFlights } )})}



  render() {
    const { handleSubmit } = this.props;

    return(
      <div>

      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label="Flight Number"
          name="flightNumber"
          component={this.renderField}
        />
        <Field
          label="Departure Date"
          name="departureDate"
          component={this.renderField}
        />
        <Field
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
          </Field>

      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

    //       <h4>Return Flight</h4>
    //         <label>
    //         Flight Number:
    //         <input type="text" name="returnFlightNumber" onChange={this.onChange} />
    //         </label>
    //         <br></br>
    //         <label>
    //         Departure Date:
    //         <input type="text" name="returnDepartureDate" onChange={this.onChange}/>
    //         </label>
    //         <br></br>
    //         <label>
    //         Airline:
    //           <select name="returnAirline" onChange={this.onChange}>
    //             <option> -- </option>
    //             <option value='B6'>Jet Blue</option>
    //             <option value='WN'>Southwest</option>
    //             <option value='DL'>Delta</option>
    //             <option value='AA'>American</option>
    //             <option value='AS'>Alaska</option>
    //             <option value='UA'>United</option>
    //             <option value='VX'>Virgin</option>
    //           </select>
    //         </label>
    //     <input className="button" type="submit" value='Add Flight' />
    // </form>

    // </div>
    )
  }
}

const mapStateToProps = state => ({
  trip: state.trips.active_trip,
  currentUser: state.auth.currentUser
});

export default reduxForm({form: 'NewFlightForm'})(connect(mapStateToProps, { createFlight })(FlightForm));
