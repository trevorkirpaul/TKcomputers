const defaultViewState = {};

export default (state = defaultViewState, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return action.data;
    case 'UPDATE_VIEW':
      return action.data;
    default:
      return state;
  }
};
