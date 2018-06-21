
const initialState = {
  items: [],
  active_trip: {},
  active_itinerary: {}
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
        active_trip: action.payload
      }
    case 'SELECT_TRIP':
      return {
        ...state,
        active_trip: action.payload
      }
    case 'DELETE_TRIP':
      return {
        ...state,
        items: state.items.filter(item => item.trip.id !== action.payload.trip.id)
    }
    case 'ADD_ITINERARY':
      return {
        ...state,
        active_itinerary: action.payload
      }
    default:
      return state;
  }
}

export default tripReducer;
