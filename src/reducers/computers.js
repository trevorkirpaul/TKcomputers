const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'COMPUTERS:START_FETCH':
      return {
        loading: action.loading,
        error: action.error,
      };
    case 'COMPUTERS:FETCH_SUCCESS':
      return {
        loading: action.loading,
        error: action.error,
        items: action.items,
      };
    case 'COMPUTERS:FETCH_FAIL':
      return {
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
};
