const authReducerDefaultState = {
  auth: false,
  token: '',
  loading: false,
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'CLICKED_LOG_IN':
      return { ...action.auth };
    case 'CLICKED_SIGN_UP':
      return { ...action.auth };
    case 'LOG_IN':
      return { ...action.auth };
    case 'LOG_OUT':
      return { ...action.auth };
    case 'REQUESTING_AUTH':
      return { ...action.auth };
    case 'SUCCESSFUL_AUTH_JWT':
      return { ...action.auth };
    case 'AUTH_ERROR':
      return { ...action.auth };
    default:
      return state;
  }
};
