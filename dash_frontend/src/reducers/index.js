import {combineReducers} from 'redux';
import authReducer from './authReducer';
import tripReducer from './tripReducer'
import flightReducer from './flightReducer'
import { reducer as formReducer } from 'redux-form'
//
// const rootReducer = combineReducers({
//   auth: AuthReducer,
//   trips: TripReducer
// });
//
// export default rootReducer

const rootReducer = combineReducers({
  auth: authReducer,
  trips: tripReducer,
  form: formReducer,
  flights: flightReducer,
});

export default rootReducer;
