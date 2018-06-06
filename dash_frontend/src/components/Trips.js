import React , { Component } from 'react'

class Trips extends Component {

  state = {
    trips: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/api/v1/trips.json')
    .then(res => res.json())
    .then(data => this.setState({trips: data}));
  }

  render() {
    const tripItems = this.state.trips.map(trip => (
      <div key={trip.id}>
        <h3>{trip.name}</h3>
        <p>{trip.origin} - {trip.destination}</p>
      </div>
    ));
    return(
      <div>
        <h1>Trips</h1>
        {tripItems}
      </div>
    )
  }
}

export default Trips;
