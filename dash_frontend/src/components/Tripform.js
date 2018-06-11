import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripActions'

class TripForm extends Component {

  state = {
    user_id: 0,
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
      destination: this.state.destination
    };

    this.props.createTrip(trip);
  }

  render() {
    return(
      <div>
        <h1>Add Trip</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>User ID: </label>
            <input type="number" name="user_id" onChange={this.onChange} value={this.state.user_id}/>
          </div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

TripForm.propTypes = {
  createTrip: PropTypes.func.isRequired
}

export default connect(null, { createTrip })(TripForm);
