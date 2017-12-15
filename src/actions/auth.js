import axios from 'axios';
import { API } from '../config';

const URL_signin = `http://${API.API_URI}/signin`;
const URL_signup = `http://${API.API_URI}/signup`;

export const signIn = function({ email, password }) {
  return dispatch => {
    axios
      .post(URL_signin, { email, password })
      .then(response => {
        // if valid credentials
        dispatch({
          type: 'LOG_IN',
          auth: true,
        });
        // save web token we get from server response
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.log('unsuccesful signin', error);
      });
  };
};

export const signUp = ({ email, password }) => {
  return dispatch => {
    axios
      .post(URL_signup, { email, password })
      .then(response => {
        dispatch({
          type: 'LOG_IN',
          auth: true,
        });
        // save web token we get from server response
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.log('unsuccesful sign up', error);
      });
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({
      type: 'LOG_OUT',
      auth: false,
    });
    localStorage.removeItem('token');
  };
};
