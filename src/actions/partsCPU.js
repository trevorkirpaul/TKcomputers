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


