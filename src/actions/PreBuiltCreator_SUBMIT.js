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
    });
    createComputer
      .then(({ data }) => {
        dispatch({
          type: 'COMPLETE:PREBUILT_CREATOR',
          data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR:PREBUILT_CREATOR_CREATING',
        });
      });
  };
};
