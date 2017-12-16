import axios from 'axios';
import { API } from '../config';

export const removePart = (id, category) => {
  const removeItem = axios.delete(`http://${API.API_URI}`, { id, category });
  return dispatch => {
    removeItem
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESSFULLY_REMOVED_PART',
          data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'UNSUCCESSFULL_ATTEMPT_REMOVE_PART',
          err,
        });
      });
  };
};
