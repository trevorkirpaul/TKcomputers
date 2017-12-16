const defaultLoadViewState = [];

export default (state = defaultLoadViewState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return [...action.data];
    default:
      return state;
  }
};
