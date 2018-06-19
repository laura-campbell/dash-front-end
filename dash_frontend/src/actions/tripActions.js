
export const fetchTrips = (id) => dispatch => {
    console.log(id)
    fetch(`http://localhost:3000/api/v1/users/${id}/trips`)
    .then(res => res.json())
    .then(trips => dispatch({
      type: 'FETCH_TRIPS',
      payload: trips
    }));
  }

export const fetchFlights = (id) => dispatch => {
  fetch(`http://localhost:3000/api/v1/trips/${id}/flights`)
  .then(res => res.json())
  .then(flights => dispatch({
    type: 'FETCH_FLIGHTS',
    payload: flights
  }));
}

  export const createTrip = (tripData, history) => dispatch => {
    fetch(`http://localhost:3000/api/v1/users/${tripData.user_id}/trips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripData)
    })
    .then(res => res.json())
    .then(trip => dispatch({
      type: 'NEW_TRIP',
      payload: trip
    }))
    .then(history.push(`/newflight`))
    }

    export const createFlight = (flightInfo, history) => dispatch => {
      console.log(flightInfo)
      fetch(`http://localhost:3000/api/v1/flights`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(flightInfo)
      })
      .then(res => res.json())
      .then(trip => dispatch({
        type: 'NEW_FLIGHT',
        payload: trip
      }))
      .then(trip => history.push(`/trip/${trip.payload.flight.trip_id}`))
      }


  export const selectTrip = (tripId) => dispatch => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: 'SELECT_TRIP',
      payload: data
    }));
  }
