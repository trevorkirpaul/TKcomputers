const defaultAdminServerState = {};

export default (state = defaultAdminServerState, action) => {
  switch (action.type) {
    case 'SUCCESSFULLY_ADDED_PART':
      return action.data;
    case 'UNSUCCESSFULL_ADDED_PART':
      return action.data;
    default:
      return state;
  }
};
