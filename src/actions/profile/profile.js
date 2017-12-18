import axios from 'axios';
import { API } from '../../config';

export const getProfile = id => {
  return dispatch => {
    dispatch({
      type: 'FETCH_PROFILE',
      status: {
        message: 'starting to fetch',
        loading: true,
      },
    });

    axios
      .get(`http://${API.API_URI}/get/profile`, id)
      .then(({ data }) => {
        dispatch({
          type: 'RECIEVE_PROFILE',
          profile: data,
          status: {
            message: 'Successful fetch',
            loading: false,
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR_FETCHING_PROFILE',
          status: {
            message: 'Failed to fetch',
            loading: false,
          },
        });
      });
  };
};
