import axios from 'axios';
import { API } from '../config';
const Token_signin = `http://${API.API_URI}`;
const URL_signin = `http://${API.API_URI}/signin`;
const URL_signup = `http://${API.API_URI}/signup`;

export const tokenAuth = token => {
  // set up token for server
  const tokenObject = {
    headers: {
      authorization: token,
    },
  };
  return dispatch => {
    dispatch({
      type: 'CLICKED_LOG_IN',
      auth: { loading: true },
    });
    axios
      .get(Token_signin, tokenObject)
      .then(({ data }) => {
        dispatch({
          type: 'LOG_IN',
          auth: {
            auth: true,
            userID: data,
            loading: false,
          },
        });
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
            token: data.token,
            userID: data.userID,
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

export const signUp = formInfo => {
  return dispatch => {
    // first dispatch to signify user attempting to create acct
    dispatch({
      type: 'CLICKED_SIGN_UP',
      auth: { loading: true },
    });
    axios
      .post(URL_signup, formInfo)
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
      .catch(error => {
        dispatch({
          type: 'AUTH_ERROR',
          auth: {
            auth: false,
            error: error.response.data.error,
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

//
// JSON Web Token
// send token for auth

export const initialAuth = () => {
  return dispatch => {
    dispatch({
      type: 'REQUESTING_AUTH',
      loading: true,
    });
    axios
      .get(`http://${API.API_URI}/`, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
      .then(response => {
        dispatch({
          type: 'SUCCESSFUL_AUTH_JWT',
          auth: {
            auth: true,
            loading: false,
            message: 'Successful log in',
            userID: response.data._id,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'AUTH_ERROR',
          auth: false,
          loading: false,
          error: 'error',
          userID: '',
        });
      });
  };
};
