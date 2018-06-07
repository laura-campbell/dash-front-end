import { FETCH_TRIPS, NEW_TRIP } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRIPS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_TRIP:
      return{
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
