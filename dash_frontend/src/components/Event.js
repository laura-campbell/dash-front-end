// import React from 'react';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { selectDay, fetchDays, fetchEvents } from '../actions/tripActions';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';
// import { Accordion, Button, Form, Segment } from 'semantic-ui-react';
// import Schedule from './Schedule'
//
// class Event extends React.Component {
//
//   componentDidMount() {
//   this.props.selectDay(this.props.day.day.id)}
//
//     render () {
//       return (
//       <Schedule day={this.props.day.day}/>
//       )
//     }}
//
//     const mapStateToProps = state => ({
//       currentUser: state.auth.currentUser,
//       trip: state.trips.active_trip,
//       days: state.trips.days,
//       currentDay: state.trips.day,
//       events: state.trips.events
//     });
//
//     const mapDispatchToProps = dispatch => {
//       return bindActionCreators({selectDay:selectDay, fetchEvents: fetchEvents}, dispatch)
//     }
//
//     export default connect(mapStateToProps, mapDispatchToProps)(Event);
