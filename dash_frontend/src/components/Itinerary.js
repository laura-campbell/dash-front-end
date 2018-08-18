import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDay, fetchDays, selectTrip, createEvent, fetchEvents } from '../actions/tripActions';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Button, Input } from 'semantic-ui-react';
import EventList from './EventList'


class Itinerary extends React.Component {

  state = {
    day_id: 0,
    description: '',
  }

  componentDidMount() {
    let length = moment(Date.parse(this.props.trip.trip.end_date)).diff(moment(Date.parse(this.props.trip.trip.start_date)), 'days');
      let day = moment(this.props.trip.trip.start_date.toLocaleString()).subtract(1, 'days');
      for (let i = 0; i < length+1; i++) {
      let newday = day.add(1, 'days');
      this.props.createDay({trip_id: this.props.trip.trip.id, daystring: newday.format('dddd MMM DD').toString()})};
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

  // this.setState({
  //   day: moment(this.props.trip.trip.start_date)
  // })

  // handleDateChange = (date) => {
  //  this.setState({
  //    day: date
  //  });
  // }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
        })
      }

  onSave = (event) => {
    event.preventDefault();
    document.getElementById('activity').value='';
    this.props.createEvent({day_id: this.state.day_id, description: this.state.description}, this.props.history);
  }

  onEdit = (event) => {
    this.setState({
      editing: true
        })
  }

  render () {
      return (
        <div className="ui grid">

          <div className="eight wide column"><label><h4>Schedule:</h4></label>

                  <div className="ui styled fluid accordion">
                    <EventList />
                    </div>

                    </div>

                    <div className="eight wide column">
                      <form onSubmit={this.onSave}>
                        <div className="inline fields">
                          <div className="eight wide field">
                        <label>Date:</label><br></br>

                          <select name='day_id' onChange={this.handleChange} className="ui dropdown">
                            <option>--</option>
                            {this.props.days.map(day =>
                              <option key={day.day.id} value={day.day.id}>{day.day.daystring}</option>)}
                          </select>

                        </div>
                        <div className="eight wide field"><label>Activity:</label><Input type="text" onChange={this.handleChange} name='description' id='activity'/>
                        <Button type="submit">Save</Button></div></div></form></div>

                    </div>
            )

                      }}

  const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    trip: state.trips.active_trip,
    days: state.trips.days,
    currentDay: state.trips.day,
    events: state.trips.events
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({createDay: createDay, selectTrip: selectTrip, fetchEvents: fetchEvents, fetchDays: fetchDays, createEvent: createEvent}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
