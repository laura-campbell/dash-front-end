import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import TripReducer from './tripReducer'
import ActiveTripReducer from './activeTripReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  trips: TripReducer,
  active_trip: ActiveTripReducer
});

export default rootReducer;
