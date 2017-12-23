const defaultShoppingCartState = {};

export default (state = defaultShoppingCartState, action) => {
  switch (action.type) {
    case 'LOADING:SHOPPING_CART':
      return { loading: action.loading };
    case 'RECIEVE:SHOPPING_CART':
      return {
        loading: action.loading,
        error: action.error,
        cart: action.data,
      };
    case 'LOADING:ADD_ITEM:SHOPPING_CART':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'LOADING:REMOVE_ITEM:SHOPPING_CART':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'SUCCESS:ADD_ITEM:SHOPPING_CART':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        ...action.cart,
        info: action.data,
      };
    case 'REMOVE_ITEM:SHOPPING_CART':
      return { ...action.cart };
    case 'ERROR:SHOPPING_CART':
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    default:
      return state;
  }
};
