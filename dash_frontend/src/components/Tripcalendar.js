import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router";
import * as actions from '../actions';
import { Card, Icon, Image } from "semantic-ui-react";
import { bindActionCreators } from 'redux';
import { selectTrip } from '../actions/tripActions';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';

class Tripcalendar extends React.Component {

  render() {
    return (
      <div>
      <Calendar />
      </div>
      );
    }
  }

  export default Tripcalendar;
