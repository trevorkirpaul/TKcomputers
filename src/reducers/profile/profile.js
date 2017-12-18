const profileDefaultState = {};

export default (state = profileDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
      return { ...action.status };
    case 'RECIEVE_PROFILE':
      return { ...action.profile, ...action.status };
    case 'ERROR_FETCHING_PROFILE':
      return { ...action.status };
    default:
      return state;
  }
};
