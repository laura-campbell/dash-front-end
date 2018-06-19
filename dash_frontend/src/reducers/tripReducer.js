

const initialState = {
  items: [],
  active_trip: {}
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
    default:
      return state;
  }
}

export default tripReducer;
