
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
    .then(trip => history.push(`/trip/${trip.payload.trip.id}`))
    }

    export const editTrip = (tripData, history) => dispatch => {
      fetch(`http://localhost:3000/api/v1/users/${tripData.user_id}/trips`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData)
      })
      .then(res => res.json())
      .then(trip => dispatch({
        type: 'UPDATE_TRIP',
        payload: trip
      }))
      .then(trip => history.push(`/trip/${trip.payload.trip.id}`))
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

  export const deleteTrip = (tripId) => dispatch => {
    fetch(`http://localhost:3000/api/v1/trips/${tripId}/delete`, {
      method: 'DELETE'})
    .then(res => res.json())
    .then(data => dispatch({
      type: 'DELETE_TRIP',
      payload: data
    }));
  }

export const createDay = (info, history) => dispatch => {
      fetch(`http://localhost:3000/api/v1/trips/${info.trip_id}/days`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(info)
      })
      .then(res => res.json())
      .then(day => dispatch({
        type: 'ADD_DAY',
        payload: day
      })).then(day => history.push(`/trip/${day.payload.day.trip_id}`))
      }

export const fetchDays = (id) => dispatch => {
    console.log(id);
    fetch(`http://localhost:3000/api/v1/trips/${id}/days`)
    .then(res => res.json())
    .then(days => dispatch({
      type: 'FETCH_DAYS',
      payload: days
    }));
  }
