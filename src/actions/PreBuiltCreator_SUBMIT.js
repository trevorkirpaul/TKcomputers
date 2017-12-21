import axios from 'axios';
import { API } from '../config';

export const startCreatePreBuiltComputer = form => {
  const createComputer = axios.post(
    `http://${API.API_URI}/products/set/computers`,
    form
  );
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
      loading: true,
    });
    createComputer
      .then(({ data }) => {
        dispatch({
          type: 'COMPLETE:PREBUILT_CREATOR',
          data,
          complete: true,
          loading: false,
          error: false,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR:PREBUILT_CREATOR_CREATING',
          loading: false,
          error: true,
        });
      });
  };
};

export const cleanupNewComputer = () => {
  return dispatch => {
    dispatch({
      type: 'CLEANUP:PREBUILT_CREATOR',
      complete: false,
    });
  };
};
