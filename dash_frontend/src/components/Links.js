import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Embed } from 'semantic-ui-react'

class Links extends React.Component {

    render () {
      return (
        <div>
        <Input label='http://' placeholder='mysite.com' />

    <a
      icon='right circle arrow'
      href='http://www.google.com' target="_blank">Google</a>
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

    // const mapDispatchToProps = dispatch => {
    //   return bindActionCreators({selectDay:selectDay, fetchEvents: fetchEvents}, dispatch)
    // }

    export default connect(mapStateToProps)(Links);
