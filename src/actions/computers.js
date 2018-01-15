import axios from 'axios';
import { API } from '../config';
const URI = API.API_URI; //192.168.1.132:3090
export const fetchComputers = () => {
  return dispatch => {
    dispatch({
      type: 'COMPUTERS:START_FETCH',
      loading: true,
      error: false,
    });
    axios
      .get(`http://${URI}/products/get/computers`)
      .then(({ data }) => {
        dispatch({
          type: 'COMPUTERS:FETCH_SUCCESS',
          loading: false,
          error: false,
          items: data.items,
        });
      })
      .catch(() => {
        dispatch({
          type: 'COMPUTERS:FETCH_FAIL',
          loading: false,
          error: true,
        });
      });
  };
};
