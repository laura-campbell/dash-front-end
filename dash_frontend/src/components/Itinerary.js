import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { createDay, fetchDays, selectTrip, createEvent, fetchEvents } from '../actions/tripActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


class Itinerary extends React.Component {

  state = {
    day: moment(),
    description: '',
    currentDayId: ''
  }

  componentDidMount() {
      this.props.fetchDays(this.props.id);
      this.props.selectTrip(this.props.id);
      console.log(this.props);
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
      day: event.target.id
        })
      console.log(this.state)}

  onAdd = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.createDay({trip_id: this.props.trip.trip.id, daystring: event.target.name})
  }

  onSave = (event) => {
    this.props.createEvent({day_id: this.props.currentDay.id, description: this.state.description}, this.props.history);
  }

  getEvents = (event) => {
    event.preventDefault();
    console.log(this.props.currentDay.id);
    this.props.fetchEvents(this.props.currentDay.id);
  }

  createTable = (startday) => {
    let table = [];
    let day = moment(startday);
    console.log(day)
    for (let i = 0; i < this.props.length; i++) {
      let newday = day.add(1, 'days');

      table.push(<tr><form onSubmit={this.onSave}>

      <td><i className="calendar check outline icon"></i><div name="day">{newday.format('dddd MMM DD').toString()}</div></td>

    <td><button name={newday.format('dddd MMM DD').toString()} onClick={this.getEvents}> Show Events </button></td>

      <td>
        {this.props.events.map(event => {
          return <p>{event.event.description}</p>
        })}
      <input onChange={this.handleChange} name="description" type="text" id={newday.format('dddd MMM DD').toString()} ></input><button type="submit">Save</button></td>
      <button onClick={this.onAdd} name={newday.format('dddd MMM DD').toString()}>Add Event</button>
      </form></tr>)      }
      return table
  }

  render () {
    console.log(this.props)
    console.log(this.props.trip.trip.start_date);
      return (
        <div className="ui equal width grid">
          <div className="row"><label><h4>Schedule:</h4></label>
            <div className="ten wide column">

              <div className="ui segment">
                <table className="ui celled table">
                  <tbody>

                {this.createTable(this.props.trip.trip.start_date)}
              </tbody></table></div></div>        </div>
                      </div>  )

                      }}

                // {this.props.days? this.props.days.map(day =>
                //   <tr key={day.day.id}>
                //       <td>
                //         <i className="calendar check outline icon"></i>
                //         {day.day.daystring}</td>
                //       <td>
                //     </td>
                //   </tr>
                // ) : null}
                //
                // {this.props.days.map(day =>
                //   {this.getEvents(day.day.id), () => {
                //     this.props.events.map(event => {console.log(event.id)})
                // }})}


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
    currentDay: state.trips.day.day,
    events: state.trips.events
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({createDay: createDay, selectTrip: selectTrip, fetchEvents: fetchEvents, fetchDays: fetchDays, createEvent: createEvent}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
