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
          cpus: data,
        });
      })
      .catch();
  };
};

export const startGetGpus = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/gpulib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'GPU:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetSSDs = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/ssdlib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'SSD:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetHDDs = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/hddlib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'HDD:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetRams = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/ramlib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'RAM:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetKeyboards = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/keyboardlib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'KEYBOARD:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetMouses = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/mouselib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'MOUSE:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetCases = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/caselib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'CASE:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};

export const startGetFans = () => {
  const getCPU = axios.get(`http://${API.API_URI}/parts/get/fanlib`);
  return dispatch => {
    dispatch({
      type: 'PREBUILT_CREATOR:LOADING',
    });
    getCPU
      .then(({ data }) => {
        dispatch({
          type: 'FANS:PREBUILT_CREATOR:FETCHING_PARTS',
          data,
        });
      })
      .catch();
  };
};
