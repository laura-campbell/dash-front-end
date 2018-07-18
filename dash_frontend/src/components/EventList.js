import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDays, fetchEvents } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Accordion, Button, Form, Segment } from 'semantic-ui-react';
import Event from './Event'

class EventList extends React.Component {


  componentDidMount() {
    console.log(this.props.trip.trip.id)
      this.props.fetchDays(this.props.trip.trip.id);
    }

    render () {
      return (

        //return list of days associated with that trip and then events associated with those days so...

      this.props.days? this.props.days.sort(function(a, b){return moment(a.day.daystring) - moment(b.day.daystring)}).map(day =>
        <tr key={day.day.id}> <td>
              <i className="calendar check outline icon"></i>
              {day.day.daystring} <Event day={day} /></td>
        </tr>
      ) : null



    )}}


    const mapStateToProps = state => ({
      currentUser: state.auth.currentUser,
      trip: state.trips.active_trip,
      days: state.trips.days,
      currentDay: state.trips.day,
      events: state.trips.events,
      currentEvent: state.trips.event
    });

    const mapDispatchToProps = dispatch => {
      return bindActionCreators({fetchDays: fetchDays, fetchEvents: fetchEvents}, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchToProps)(EventList);
