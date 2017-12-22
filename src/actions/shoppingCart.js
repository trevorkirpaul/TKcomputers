import axios from 'axios';
import { API } from '../config';

export const fetchShoppingCart = id => {
  return dispatch => {
    const getUserOrders = axios.post(`http://${API.API_URI}/get/orderdetails`, {
      id,
    });
    dispatch({
      type: 'LOADING:SHOPPING_CART',
      loading: true,
    });
    getUserOrders
      .then(({ data }) => {
        dispatch({
          type: 'RECIEVE:SHOPPING_CART',
          loading: false,
          error: false,
          data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR:SHOPPING_CART',
          error: true,
          loading: false,
        });
      });
  };
};

export const addItemShoppingCart = (userId, productId) => {
  const addItem = axios.put(`http://${API.API_URI}/shoppingcart/add`, {
    userId,
    productId,
  });
  return dispatch => {
    dispatch({
      type: 'LOADING:ADD_ITEM:SHOPPING_CART',
      loading: true,
      error: false,
      info: {
        userId,
        productId,
      },
    });
    addItem
      .then(({ data }) => {
        dispatch({
          type: 'SUCCESS:ADD_ITEM:SHOPPING_CART',
          data,
          loading: false,
          error: false,
        });
      })
      .catch(err => {
        dispatch({
          type: 'ERROR:SHOPPING_CART',
          error: true,
          loading: false,
        });
      });
  };
};
