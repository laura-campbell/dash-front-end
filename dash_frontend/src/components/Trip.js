import React from 'react';
import {connect} from 'react-redux';
import { Card } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { deleteTrip, selectTrip } from '../actions/tripActions';


class Trip extends React.Component {

  render() {
    return (
      <div>
      <Card>
        <Card.Content>
        <Card.Header>{this.props.trip.name}&nbsp;&nbsp;&nbsp;&nbsp;<div onClick={() => {this.props.deleteTrip(this.props.trip.id)}}><i className="right floated trash alternate icon" style={ {color: '#808080'} }></i></div>&nbsp;&nbsp;<div onClick={() => {this.props.selectTrip(this.props.trip.id)}}><Link to={`/trip/${this.props.trip.id}`}><i className="right floated edit icon" style={ {color: '#808080'} }></i></Link></div></Card.Header>
        </Card.Content>
      </Card>
      </div>
      );
    }
  }

  const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    active_trip: state.trips.active_trip,
    days: state.trips.days
  });

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({deleteTrip: deleteTrip, selectTrip: selectTrip}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Trip);
