const viewMoreItemDefaultState = {};

export default (state = viewMoreItemDefaultState, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      return [...action.data];
    case 'ERR_FINDING_ITEM':
      return [...action.err];
    default:
      return state;
  }
};
