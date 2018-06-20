import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createItinerary } from '../actions/tripActions';


class Itinerary extends React.Component {

  state = {
    trip_id: '',
    itinerary: {}
  }
// {new Date(this.props.active_trip.trip.start_date).toDateString()}
    handleChange = (event) => {
      console.log(event.target.value);
      console.log(event.target.name);
      this.setState({
       trip_id: this.props.trip.trip.id,
       itinerary: {...this.state.itinerary, [event.target.name]: event.target.value
     }});
    }

    onSubmit = () => {
      console.log(this.state)
      const itineraryValues = {trip_id: this.state.trip_id, itinerary: this.state.itinerary};
      console.log(itineraryValues);
      console.log(this.props);
      this.props.createItinerary(itineraryValues, this.history);
      console.log(this.props);
    }

  render() {

    const rows = [];
    for (var i = 0; i < this.props.length; i++) {
      rows.push(`Day ${i+1}`)
    }

    const { handleSubmit } = this.props;

    return (
            <form class="ui form" onSubmit={  handleSubmit(this.onSubmit.bind(this)) } >
        <table class="ui striped table">
            <tbody>
              {rows.map(row => <tr><td><div class="ui fluid labeled input">
          <div class="ui label">
            {row}
          </div>
          <input name={row} type="text" placeholder="schedule" onChange={this.handleChange}></input>
          </div>
          </td></tr>)}
            </tbody>
        </table>

      <button type="submit" class="ui button">Submit</button></form>
  )
 }
}

  const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    trip: state.trips.active_trip,
    active_itinerary: state.trips.active_itinerary
  });

  export default reduxForm({
    form: 'NewItineraryForm'
  })(
    connect(mapStateToProps, { createItinerary })(Itinerary)
  );
