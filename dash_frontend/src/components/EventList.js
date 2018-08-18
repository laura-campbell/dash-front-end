import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDays, fetchEvents } from '../actions/tripActions';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Accordion } from 'semantic-ui-react';
import '../index.css';


class EventList extends React.Component {

  state={
    activeIndex: 0
  }

  componentDidMount() {
      this.props.fetchDays(this.props.trip.trip.id);
    }


      handleTitleClick = (e, itemProps) => {
        const { index } = itemProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex });
        this.props.fetchEvents(itemProps.id)
      }

    render () {
      const { activeIndex } = this.state

      return (

        //return list of days associated with that trip and then events associated with those days so...

      this.props.days?

      <Accordion activeIndex={activeIndex} panels={this.props.days.sort(function(a, b){
          return moment(a.day.daystring) - moment(b.day.daystring)}).map(day =>
            ({
              key: day.day.id,
              title: {key: day.day.id, content: day.day.daystring, id: day.day.id},
              content: this.props.events.map(event =>
                <li key={event.event.id}><i className="minus icon"/>{event.event.description}</li>
              )
            })
        )}
      onTitleClick={this.handleTitleClick} />

       : null



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
