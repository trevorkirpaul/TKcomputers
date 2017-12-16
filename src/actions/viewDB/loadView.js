import axios from 'axios';
import { API } from '../../config';

export const startGetItems = name => {
  const getItems = axios.get(`http://${API.API_URI}/parts/get/${name}`);
  return dispatch => {
    getItems
      .then(({ data }) => {
        dispatch({
          type: 'GET_ITEMS',
          data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
