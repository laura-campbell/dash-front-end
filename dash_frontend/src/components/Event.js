import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectDay, fetchDays, fetchEvents } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Accordion, Button, Form, Segment } from 'semantic-ui-react';

class Event extends React.Component {

  getEvents = (id) => {
    this.props.selectDay(this.props.day.day.id);
    this.props.fetchEvents(id);
  }

    render () {
      console.log(this.props.events)
      return (
        <button onClick={() => {this.getEvents(this.props.day.day.id)}}>Show Events</button>
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
      return bindActionCreators({selectDay:selectDay, fetchEvents: fetchEvents}, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Event);
