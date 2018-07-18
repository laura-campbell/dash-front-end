
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

export const fetchPackingList = (id) => dispatch => {
  fetch(`http://localhost:3000/api/v1/trips/${id}/packinglist`)
  .then(res => res.json())
  .then(packinglist => dispatch({
    type: 'FETCH_PACKING_LIST',
    payload: packinglist
  }));
}

export const createListItem = (itemData, history) => dispatch => {
  fetch(`http://localhost:3000/api/v1/trips/${itemData.trip_id}/packinglist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(itemData)
  })
  .then(res => res.json())
  .then(item => dispatch({
    type: 'NEW_PACKING_LIST',
    payload: item
  }))
  .then(item => history.push(`/trip/${item.payload.item.trip_id}`))
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

export const createDay = (info) => dispatch => {
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
      })).then(day => console.log(day))
      }

export const selectDay = (id) => dispatch => {
    console.log(id);
    fetch(`http://localhost:3000/api/v1/days/${id}`)
    .then(res => res.json())
    .then(day => dispatch({
      type: 'SELECT_DAY',
      payload: day
    }));
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

  export const createEvent = (info, history) => dispatch => {
        fetch(`http://localhost:3000/api/v1/days/${info.day_id}/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(event => dispatch({
          type: 'ADD_EVENT',
          payload: event
        }))
        }

  export const fetchEvents = (id) => dispatch => {
      console.log(id);
      fetch(`http://localhost:3000/api/v1/days/${id}/events`)
      .then(res => res.json())
      .then(events => dispatch({
        type: 'FETCH_EVENTS',
        payload: events
      }));
    }
