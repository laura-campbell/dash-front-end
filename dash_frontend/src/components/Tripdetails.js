import React from 'react';
import { selectTrip } from '../actions/tripActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import FlightDetails from './Flightdetails';
import PackingList from './PackingList';
import moment from 'moment';
import Itinerary from './Itinerary';
import Links from './Links'


class TripDetails extends React.Component {

  componentDidMount() {
    this.props.selectTrip(this.props.match.params.tripId);
    console.log(this.props);
  }
  // componentDidMount() {
  //   let length = moment(Date.parse(this.props.active_trip.trip.end_date)).diff(moment(Date.parse(this.props.active_trip.trip.start_date)), 'days');
  //   let day = moment(this.props.active_trip.trip.start_date.toLocaleString()).subtract(1, 'days');
  //   for (let i = 0; i < length+1; i++) {
  //   let newday = day.add(1, 'days');
  //   this.props.createDay({trip_id: this.props.active_trip.trip.id, daystring: newday.format('dddd MMM DD').toString()})}
  // }

  render() {

    return (
      (!this.props.active_trip.trip) ? null :

      (<div>

        <button className="ui right floated button">
          <i className="left arrow icon"></i>
          <Link to='/trips'>Back to Trips</Link>
        </button>

        <h1 className="ui header">
          <i className="bookmark outline icon"></i>
            {this.props.active_trip.trip.name}
          </h1>

            <h3 className="ui horizontal divider header">
              <i className="paperclip icon"></i>
              Itinerary
            </h3>
                  <div className="ui vertical segments">
                    <div className="ui teal segment">
                      <h4 className="ui header">Dates:&nbsp;&nbsp;&nbsp;&nbsp; {new Date(this.props.active_trip.trip.start_date).toDateString()}  <i className="caret right icon"></i>{new Date(this.props.active_trip.trip.end_date).toDateString()}</h4>
                  </div>
                <div className="ui teal segment"><h4 className="ui header">Length of Trip:&nbsp;&nbsp;&nbsp;&nbsp; {moment(Date.parse(this.props.active_trip.trip.end_date)).diff(moment(Date.parse(this.props.active_trip.trip.start_date)), 'days')+1} days
                </h4></div></div>

              <div className="ui blue segment"><Itinerary id={this.props.match.params.tripId} length={moment(Date.parse(this.props.active_trip.trip.end_date)).diff(moment(Date.parse(this.props.active_trip.trip.start_date)), 'days')} /></div>

            <h3 className="ui horizontal divider header">
              <i className="plane icon"></i>
              Flight Information
            </h3>
        <FlightDetails id={this.props.match.params.tripId}/>
        <br></br>
          <h3 className="ui horizontal divider header">
            <i className="tasks icon"></i>
            Packing List
          </h3>
          <PackingList id={this.props.match.params.tripId} length={moment(Date.parse(this.props.active_trip.trip.end_date)).diff(moment(Date.parse(this.props.active_trip.trip.start_date)), 'days')+1}/>

          <br></br>
          <button className="ui labeled icon button">
            <i className="left arrow icon"></i>
            <Link to='/profile'>Back to Profile</Link>
          </button>
      </div>)
      );
    }
  }
// const mapStateToProps = state =>
//   ({
//     trip: state.active_trip
//   });

const mapStateToProps = state => ({
  active_trip: state.trips.active_trip,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({selectTrip: selectTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);



// <h3 className="ui horizontal divider header">
//   <i className="linkify icon"></i>
//   Websites
// </h3>
// <Links />


          // 
          // <h3 className="ui horizontal divider header">
          //   <i className="camera retro icon"></i>
          //   Photos
          // </h3>
