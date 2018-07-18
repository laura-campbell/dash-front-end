import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDay, fetchDays, selectTrip, createEvent, fetchEvents } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Accordion, Button, Form, Segment } from 'semantic-ui-react';
import EventList from './EventList'


class Itinerary extends React.Component {

  state = {
    day_id: 0,
    description: '',
  }

  componentWillMount() {
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
      console.log(this.state)}

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

  addEvent = () => {
    console.log(this.props.currentDay.day.id)
  }

  // initialize = (startday) => {
  //   let day = moment(startday);
  //     console.log(this.props.length)
  //     for (let i = 0; i < this.props.length; i++) {
  //     let newday = day.add(1, 'days');
  //     this.props.createDay({trip_id: this.props.trip.trip.id, daystring: newday.format('dddd MMM DD').toString()})
  // }}


  //
  //     table.push(<tr><form onSubmit={this.onSave}>
  //       <td> <label value={newday.format('dddd MMM DD').toString()}>{newday.format('dddd MMM DD').toString()}</label>
  //        <input onClick={this.selectDay} onChange={this.handleChange} name='description'/><button type="submit">Save</button></td>
  //     </form></tr>)}
  //
  //       return table
  //   }

      //   <Segment>
      //   <Form onSubmit={this.onSave}>
      //
      //     {this.state.editing ?
      //     <Accordion as={Form.Field} onTitleClick= {this.selectDay} onChange= {this.handleChange} panels={[
      //       {
      //         title: newday.format('dddd MMM DD').toString(),
      //         value: newday,
      //         content: {
      //           as: Form.Input,
      //           label: 'Description',
      //           placeholder: 'Activity',
      //           name: 'description'
      //         },
      //       }
      //     ]} />
      //
      //   :
      //
      //   <Accordion as={Form.Field} onTitleClick= {this.selectDay, () => {this.props.fetchEvents(this.state.currentDayId)}} onChange= {this.handleChange} panels={[
      //     {
      //       title: newday.format('dddd MMM DD').toString(),
      //       value: newday,
      //       content: this.props.currentDay.day ? `${this.props.events}` : null
      //       }
      //   ]} />}
      //
      //   </Form>
      // </Segment>




  render () {
    console.log(this.props);
    console.log(this.state);
    console.log(this.props.trip.trip.start_date);

      return (
        <div className="ui grid">

          <div className="four wide column"><label><h4>Schedule:</h4></label>
                <table className="ui celled table">
                  <tbody>
                    <EventList />
                    </tbody>
                  </table>
                    </div>

              <div className="four wide column">

              <ul>{this.props.events.map(event =>
                    <li>{event.event.description}</li>)}</ul></div>

                    <div className="eight wide column">
                      <form onSubmit={this.onSave}>
                        <div class="inline fields">
                          <div class="eight wide field">
                        <label>Date:</label>

                          <select name='day_id' onChange={this.handleChange} class="ui dropdown">
                            <option>--</option>
                            {this.props.days.map(day =>
                              <option value={day.day.id}>{day.day.daystring}</option>)}
                          </select>

                        </div>
                        <div class="eight wide field"><label>Activity:</label><input type="text" onChange={this.handleChange} name='description' id='activity'/><button type="submit">Save</button></div></div></form></div>

                    </div>
            )

                      }}

      //     <div className="six wide column">
      //     <div className= "ui form">
      //       <form onSubmit={this.onSubmit}>
      //       <div className="three fields">
      //       <label><h4>Day: </h4><DatePicker
      //         label="day"
      //         name="day"
      //         selected={this.state.day}
      //         onChange={this.handleDateChange}
      //         minDate={moment(this.props.trip.trip.start_date)}
      //         maxDate={moment(this.props.trip.trip.end_date)}
      //       /></label>
      //     <label><h4>Description:</h4> <input onChange={this.handleChange} name="description" type="text" ></input></label>
      //         <label> <br></br> <br></br>
      //         <button type="submit" className="ui tiny button">Add</button></label></div>
      //   </form>
      // </div>
      //   </div>



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
//         <form className="ui form">
//         <table className="ui striped table">
//             <tbody>
//
//               {rows.map(row =>
//
//                 this.state.current_itinerary.editing ?
//                 <tr>
//                 <td>
//
//                 <div className="ui fluid labeled input">
//                   <div className="ui label">
//                     {row}
//                   </div>
//
//                   <div><input onChange={this.handleChange} name={row} type="text" placeholder="schedule"></input>
//           <button type="submit" className="ui button" onClick={this.handleSave}>Save</button></div></div></td></tr>
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
//   <button type="submit" className="ui button" onClick={  handleSubmit(this.onSubmit.bind(this))} >Save</button>
// </form>
//
//   )
// }}

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
