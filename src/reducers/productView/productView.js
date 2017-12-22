const defaultProductViewState = {
  loading: false,
  error: false,
};

export default (state = defaultProductViewState, action) => {
  switch (action.type) {
    case 'FETCHING:PRODUCT_VIEW':
      return {
        loading: action.loading,
      };
    case 'RECIEVED:PRODUCT_VIEW':
      return {
        loading: action.loading,
        product: action.product,
      };
    case 'ERROR:PRODUCT_VIEW':
      return {
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
