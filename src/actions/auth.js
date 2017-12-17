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

export const signUp = ({ email, password, admin }) => {
  return dispatch => {
    // first dispatch to signify user attempting to create acct
    dispatch({
      type: 'CLICKED_SIGN_UP',
      auth: { loading: true },
    });
    axios
      .post(URL_signup, { email, password, admin })
      .then(({ data }) => {
        dispatch({
          type: 'LOG_IN',
          auth: {
            auth: true,
            error: '',
            token: data,
            loading: false,
          },
        });
        // save web token we get from server response
        localStorage.setItem('token', data.token);
      })
      .catch(({ data }) => {
        dispatch({
          type: 'AUTH_ERROR',
          auth: {
            auth: false,
            error: data,
            loading: false,
          },
        });
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
