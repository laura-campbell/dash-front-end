import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createDay, fetchDays } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class Itinerary extends React.Component {

  state = {
    trip_id: this.props.trip.trip.id,
    day: '',
    description: ''
  }

  componentDidMount() {
    this.props.fetchDays(this.props.trip.trip.id);
  }

  // trip_id: '',
  // current_itinerary: {
  //   day: '',
  //   description: '',
  //   editing: true
  // },
  // itinerary: [{
  // day: '',
  // description: ''

  handleDateChange = (date) => {
   this.setState({
     day: date
   });
 }


  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
        })
      console.log(this.state)}

      onSubmit = () => {
        console.log(this.state);
        this.props.createDay({trip_id: this.state.trip_id, daystring: this.state.day._d.toDateString(), description: this.state.description}, this.props.history);
        console.log(this.props.days)
      }

  render () {
      return (
        <div class="ui equal width grid">
          <div class="row"><label><h4>Schedule:</h4>
            <div class="ten wide column">

              <div class="ui segment">
                <table class="ui celled table">
                  <tbody>
                {this.props.days.map(day =>
                  <tr>
                      <td>{day.day.daystring}&nbsp;&nbsp; <i  class="calendar minus outline icon"></i> &nbsp;
                      {day.day.description}
                    </td>
                  </tr>
                )}
            </tbody></table></div></div></label>
          <div class="six wide column">
          <div class= "ui form">
            <form onSubmit={this.onSubmit}>
            <div class="three fields">
            <label><h4>Day: </h4><DatePicker
              label="day"
              name="day"
              selected={this.state.day}
              onChange={this.handleDateChange}
            /></label>
          <label><h4>Description:</h4> <input onChange={this.handleChange} name="description" type="text" ></input></label>
              <label>  <br></br> <br></br>
              <button type="submit" class="ui tiny button">Add</button></label></div>
        </form>
      </div>
        </div>
        </div>
        </div>

  )

}}
// {new Date(this.props.active_trip.trip.start_date).toDateString()}


    // handleSave = (event) => {
    //   event.preventDefault();
    //   console.log(this.state);
    //   this.setState({
    //    trip_id: this.props.trip.trip.id,
    //    current_itinerary: {...this.state.current_itinerary, editing: false},
    //    itinerary: [...this.state.itinerary, {
    //      day: this.state.current_itinerary.day,
    //      description: this.state.current_itinerary.description
    //    }]
    //  });
    // }


//   render() {
//
//     const rows = [];
//     for (var i = 0; i < this.props.length; i++) {
//       rows.push(`Day ${i+1}`)
//     }
//
//     const { handleSubmit } = this.props;
//
//     return (
//
//         <form class="ui form">
//         <table class="ui striped table">
//             <tbody>
//
//               {rows.map(row =>
//
//                 this.state.current_itinerary.editing ?
//                 <tr>
//                 <td>
//
//                 <div class="ui fluid labeled input">
//                   <div class="ui label">
//                     {row}
//                   </div>
//
//                   <div><input onChange={this.handleChange} name={row} type="text" placeholder="schedule"></input>
//           <button type="submit" class="ui button" onClick={this.handleSave}>Save</button></div></div></td></tr>
//
//           :
//
//           <tr>
//           <td>
//               {row}
//             </td>
//
//             <td>
//
//               {(this.state.current_itinerary.day == {row}) ?
//
//               <div>{this.state.current_itinerary.description}</div>
//
//               :
//
//               <div></div>}
//
//
//             </td></tr>
//           )}
//
//     </tbody>
//   </table>
//
//   <button type="submit" class="ui button" onClick={  handleSubmit(this.onSubmit.bind(this))} >Save</button>
// </form>
//
//   )
// }}

  const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    trip: state.trips.active_trip,
    days: state.trips.days
  });

  export default reduxForm({
    form: 'NewItineraryForm'
  })(
    connect(mapStateToProps, { createDay, fetchDays })(Itinerary)
  );
