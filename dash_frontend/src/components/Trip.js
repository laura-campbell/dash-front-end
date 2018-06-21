import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../actions';
import { Card, Icon, Image } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import { selectTrip } from '../actions/tripActions';
import { Link } from 'react-router-dom';
import { deleteTrip } from '../actions/tripActions';


class Trip extends React.Component {

  render() {
    return (
      <div>
      <Card>
        <Card.Content>
        <Card.Header>{this.props.trip.name}&nbsp;&nbsp;&nbsp;&nbsp;<div onClick={() => {this.props.deleteTrip(this.props.trip.id)}}><i class="right floated trash icon" style={ {color: '#808080'} }></i></div>&nbsp;&nbsp;<Link to={`/trip/${this.props.trip.id}`}><i class="right floated edit icon" style={ {color: '#808080'} }></i></Link></Card.Header>
        <Card.Description>
        </Card.Description>
        </Card.Content>
      </Card>
      </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({deleteTrip: deleteTrip}, dispatch)
  }

  export default connect(null, mapDispatchToProps)(Trip);
