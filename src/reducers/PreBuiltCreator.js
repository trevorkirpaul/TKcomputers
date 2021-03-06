const defaultPrebuiltCreatorState = {
  loading: false,
  cpus: [],
  gpus: [],
  error: false,
};

export default (state = defaultPrebuiltCreatorState, action) => {
  switch (action.type) {
    case 'PREBUILT_CREATOR:LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    case 'PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        cpus: action.cpus,
        loading: false,
      };
    case 'GPU:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        gpus: action.data,
        loading: false,
      };
    case 'SSD:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        ssds: action.data,
        loading: false,
      };
    case 'HDD:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        hdds: action.data,
        loading: false,
      };
    case 'RAM:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        rams: action.data,
        loading: false,
      };
    case 'KEYBOARD:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        keyboards: action.data,
        loading: false,
      };
    case 'MOUSE:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        mouses: action.data,
        loading: false,
      };
    case 'CASE:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        cases: action.data,
        loading: false,
      };
    case 'FANS:PREBUILT_CREATOR:FETCHING_PARTS':
      return {
        ...state,
        fans: action.data,
        loading: false,
      };
    case 'COMPLETE:PREBUILT_CREATOR':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
        computer: action.data,
        complete: action.complete,
      };
    case 'ERROR:PREBUILT_CREATOR_CREATING':
      return {
        ...state,
        loading: action.loading,
        error: action.eror,
      };
    case 'CLEANUP:PREBUILT_CREATOR':
      return {
        complete: action.complete,
      };
    default:
      return state;
  }
};
