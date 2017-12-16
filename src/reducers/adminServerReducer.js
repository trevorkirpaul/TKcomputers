const defaultAdminServerState = {};

export default (state = defaultAdminServerState, action) => {
  switch (action.type) {
    case 'SUCCESSFULLY_ADDED_PART':
      return action.data;
    case 'UNSUCCESSFULL_ADDED_PART':
      return action.data;
    case 'SUCCESSFULLY_REMOVED_PART':
      return action.data;
    case 'UNSUCCESSFULL_ATTEMPT_REMOVE_PART':
      return action.err;
    default:
      return state;
  }
};
