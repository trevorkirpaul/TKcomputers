const authReducerDefaultState = false;

export default(state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.auth;
    case 'LOG_OUT':
      return action.auth;
    default:
      return state;
  }
}