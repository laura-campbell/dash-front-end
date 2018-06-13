const activeTripReducer = (state=null, action) => {
  switch(action.type) {
    case 'SELECT_TRIP':
      return action.payload;
  }
  return state;
}

export default activeTripReducer;
