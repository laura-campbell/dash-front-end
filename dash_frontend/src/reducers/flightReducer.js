const initialState = {
  items: [],
  item: {}
}

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FLIGHTS':
      return {
        ...state,
        items: action.payload
      }
    case 'NEW_FLIGHT':
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}

export default flightReducer;
