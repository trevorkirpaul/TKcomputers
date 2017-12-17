import axios from 'axios';
import { API } from '../config';

const URL_signin = `http://${API.API_URI}/signin`;
const URL_signup = `http://${API.API_URI}/signup`;

export const signIn = function({ email, password }) {
  return dispatch => {
    // first dispatch to signify user attempting to log in
    dispatch({ type: 'CLICKED_LOG_IN', auth: { loading: true } });
    axios
      .post(URL_signin, { email, password })
      .then(({ data }) => {
        // if valid credentials
        dispatch({
          type: 'LOG_IN',
          auth: {
            auth: true,
            token: data,
            loading: false,
          },
        });
        // save web token we get from server response
        localStorage.setItem('token', data.token);
      })
      .catch(() => {
        dispatch({
          type: 'AUTH_ERROR',
          auth: {
            auth: false,
            error: 'Server error! Please try again or contact an admin!',
            loading: false,
          },
        });
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
      auth: {
        auth: false,
        token: '',
      },
    });
    localStorage.removeItem('token');
  };
};
