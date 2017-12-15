import axios from 'axios';
import { API } from '../config';

//
// ___CPU ACTIONS___
//

export const startAddCPU = fields => {
  const setCPU = axios.post(`http://${API.API_URI}/parts/set/cpu`, fields);
  return dispatch => {
    setCPU
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESSFULLY_ADDED_PART',
          data: {
            part: data.cpu,
            message: data.message,
            error: '',
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'UNSUCCESSFULL_ADDED_PART',
          data: {
            error: err,
            message: 'Failed to add part',
            part: '',
          },
        });
      });
  };
};

export const startGetCPUs = () => {
  const requestCPUs = axios.get(`http://${API.API_URI}/parts/get/cpu`);
  return dispatch => {
    requestCPUs.then(({ data }) => {
      dispatch({
        type: 'RECIEVE_ALL',
        data,
      });
    });
  };
};

//
// ___SSD ACTIONS___
//

export const startAddSSD = fields => {
  const setSSD = axios.post(`http://${API.API_URI}/parts/ssd`, fields);
  return dispatch => {
    setSSD
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//
// ___CASE ACTIONS___
//

export const startAddCase = fields => {
  const setCase = axios.post(`http://${API.API_URI}/parts/set/case`, fields);
  return dispatch => {
    setCase
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESSFULLY_ADDED_PART',
          data: {
            part: data.$case,
            message: data.message,
            error: '',
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'UNSUCCESSFULL_ADDED_PART',
          data: {
            error: err,
            message: 'Failed to add part',
            part: '',
          },
        });
      });
  };
};

//
// ___GPU ACTIONS___
//

export const startAddGPU = fields => {
  const setGPU = axios.post(`http://${API.API_URI}/parts/set/gpu`, fields);
  return dispatch => {
    setGPU
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESSFULLY_ADDED_PART',
          data: {
            part: data.gpu,
            message: data.message,
            error: '',
          },
        });
      })
      .catch(err => {
        dispatch({
          type: 'UNSUCCESSFULL_ADDED_PART',
          data: {
            error: err,
            message: 'Failed to add part',
            part: '',
          },
        });
      });
  };
};
