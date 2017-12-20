const defaultPrebuiltCreatorState = {
  loading: false,
  cpus: [],
};

export default (state = defaultPrebuiltCreatorState, action) => {
  switch (action.type) {
    case 'PREBUILT_CREATOR:LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        cpus: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
