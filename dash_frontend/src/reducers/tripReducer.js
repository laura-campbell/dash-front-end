import { fetchTrips, createTrip } from '../actions/tripActions'

const initialState = {
  items: [],
  item: {}
}

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRIPS':
      return {
        ...state,
        items: action.payload
      }
    case 'NEW_TRIP':
      return{
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}

export default tripReducer;
