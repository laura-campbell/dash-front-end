
const initialState = {
  items: [],
  active_trip: {},
  days: [],
  day: {},
  events: [],
  event:  {}
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
    case 'ADD_DAY':
      return {
        ...state,
        day: action.payload
      }
    case 'ADD_EVENT':
      return {
        ...state,
        event: action.payload
      }
    case 'FETCH_DAYS':
      return {
        ...state,
        days: action.payload
      }
    case 'FETCH_EVENTS':
      return {
        ...state,
        events: action.payload
      }
    case 'FETCH_PACKING_LIST':
      return {
        ...state,
        packinglist: action.payload
      }
    case 'NEW_PACKING_LIST':
      return {
        ...state,
        listitem: action.payload
      }
    default:
      return state;
  }
}

export default tripReducer;
