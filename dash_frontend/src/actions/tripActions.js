
export const fetchTrips = (id) => dispatch => {
    fetch(`http://localhost:3000/api/v1/users/${id}/trips`)
    .then(res => res.json())
    .then(trips => dispatch({
      type: 'FETCH_TRIPS',
      payload: trips
    }));
  }

  export const createTrip = (tripData) => dispatch => {
    fetch(`http://localhost:3000/api/v1/users/${tripData.user_id}/trips`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tripData)
    })
    .then(res => res.json())
    .then(trip => dispatch({
      type: 'NEW_TRIP',
      payload: trip
    }));
    }
