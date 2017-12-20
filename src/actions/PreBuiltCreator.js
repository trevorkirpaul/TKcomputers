import axios from 'axios';
import { API } from '../config';

export const startGetCpus = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/cpulib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};
