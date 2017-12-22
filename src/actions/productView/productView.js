import axios from 'axios';
import { API } from '../../config';

export const fetchFeaturedComputer = id => {
  const getComputer = axios.post(
    `http://${API.API_URI}/products/get/computer`,
    { id }
  );
  return dispatch => {
    dispatch({
      type: 'FETCHING:PRODUCT_VIEW',
      loading: true,
    });
    getComputer
      .then(({ data }) => {
        dispatch({
          type: 'RECIEVED:PRODUCT_VIEW',
          loading: false,
          product: data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR:PRODUCT_VIEW',
          loading: false,
          error: err,
        });
      });
  };
};
