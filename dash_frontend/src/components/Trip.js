import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../actions';
import { Card, Icon, Image } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import { selectTrip } from '../actions/tripActions';
import { Link } from 'react-router-dom';


class Trip extends React.Component {

  render() {
    return (
      <div>
      <Card>
        <Card.Content>
        <Card.Header>{this.props.trip.name}&nbsp;&nbsp;&nbsp;&nbsp;<Link to={`/trip/${this.props.trip.id}/delete`}><i class="right floated trash icon" style={ {color: '#808080'} }></i></Link>&nbsp;&nbsp;<Link to={`/trip/${this.props.trip.id}`}><i class="right floated edit icon" style={ {color: '#808080'} }></i></Link></Card.Header>
        <Card.Description>
        </Card.Description>
        </Card.Content>
      </Card>
      </div>
      );
    }
  }

  export default Trip;



// connect (mapStateToProps)(Trip);
