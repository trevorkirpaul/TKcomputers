const defaultShoppingCartState = [];

export default (state = defaultShoppingCartState, action) => {
  switch (action.type) {
    case 'LOADING:SHOPPING_CART':
      return [...action.cart];
    case 'ADD_ITEM:SHOPPING_CART':
      return [...action.cart];
    case 'REMOVE_ITEM:SHOPPING_CART':
      return [...action.cart];
    default:
      return state;
  }
};
