import React , { Component } from 'react'

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

    fetch('http://localhost:3000/api/v1/trips.json', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(trip)
    })
    .then(res => res.json())
    .then(data => console.log(data));
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

export default TripForm;
