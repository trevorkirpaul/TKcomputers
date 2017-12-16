import axios from 'axios';
import { API } from '../config';

export const startRemovePart = (id, category) => {
  const removeItem = axios.post(`http://${API.API_URI}/parts/remove`, {
    id,
    category,
  });
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
