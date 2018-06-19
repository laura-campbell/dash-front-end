// let user = JSON.parse(localStorage.getItem('user'));
//
// const initialState = user ? {loggedIn:true, user} : {};
//
// const authReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case 'SET_CURRENT_USER':
//       const { id, username } = action.user;
//       return {
//         loggedIn: true,
//         currentUser: { id, username } };
//     case 'LOGOUT_USER':
//       return { loggedIn: false, currentUser: {}};
//     default:
//       return state;
//   }
// // };
//
// export default authReducer;

const initialState = { currentUser: {} };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      const { id, username } = action.user;
      return { ...state, currentUser: { id, username } };
    case 'LOGOUT_USER':
      return { ...state, currentUser: {} };
    default:
      return state;
  }
};

export default authReducer;
