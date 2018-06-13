import React , { Component } from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions';
import { Redirect } from "react-router";
import { bindActionCreators } from 'redux'

class TripForm extends Component {

  state = {
    user_id: this.props.currentUser.id,
    name: '',
    origin: '',
    destination: ''
  }


  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    const trip = {
      user_id: this.state.user_id,
      name: this.state.name,
      origin: this.state.origin,
      destination: this.state.destination,
    };
    this.props.createTrip(trip);
  }

  render() {
    return(
        <div>
          <h1>Add Trip</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title: </label>
              <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
            </div>
            <div>
              <label>Origin: </label>
              <input type="text" name="origin" onChange={this.onChange} value={this.state.origin}/>
              <label>Destination: </label>
              <input type="text" name="destination" onChange={this.onChange} value={this.state.destination}/>
            </div>
            <input className="button" type="submit" value='Add Trip' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  trip: state.trips.item,
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({createTrip: createTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm);
