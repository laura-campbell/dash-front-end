
export const fetchTrips = () => dispatch => {
    fetch('http://localhost:3000/api/v1/trips')
    .then(res => res.json())
    .then(trips => dispatch({
      type: 'FETCH_TRIPS',
      payload: trips
    }));
  }

  export const createTrip = (tripData) => dispatch => {
    fetch('http://localhost:3000/api/v1/trips', {
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
