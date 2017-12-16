import axios from 'axios';
import { API } from '../../config';

export const startGetItem = (id, category) => {
  const getItem = axios.post(`http://${API.API_URI}/products/search`, {
    id,
    category,
  });
  return dispatch => {
    getItem
      .then(({ data }) => {
        dispatch({
          type: 'GET_ITEM',
          data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERR_FINDING_ITEM',
          err,
        });
      });
  };
};
