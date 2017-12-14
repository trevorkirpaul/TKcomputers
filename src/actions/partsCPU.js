import axios from 'axios';
import { API } from '../config';

export const startGetCPUs = () => {
  const requestCPUs = axios.get(`http://${API.API_URI}/parts/get/cpu`);
  return(dispatch) => {
    requestCPUs
      .then(({data}) => {
        dispatch({
          type: 'RECIEVE_ALL',
          data
        })
      })
  }
}

export const startAddSSD = (fields) => {
  const setSSD = axios.post(`http://${API.API_URI}/parts/ssd`, fields);
  return(dispatch => {
    setSSD
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  })
}


export const startAddCase = (fields) => {
  const setCase = axios.post(`http://${API.API_URI}/parts/set/case`, fields);
  return(dispatch => {
    setCase
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  })
}