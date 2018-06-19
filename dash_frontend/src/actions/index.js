import { adapter } from '../services';

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.login({ username, password })
  .then(user => {
    if (user.error) {
      alert(user.error);
    } else {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  }});
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

export const createUser = (userData, history) => dispatch => {
  fetch(`http://localhost:3000/api/v1/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(user => dispatch({
    type: 'NEW_USER',
    payload: user
  }))
  .then(history.push(`/profile`))
  }
