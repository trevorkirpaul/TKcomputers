const partsReducerDefaultState = [];
export default (state = partsReducerDefaultState, action) => {
  switch (action.type) {
    case 'RECIEVE_ALL':
      return [
        ...action.data
      ];
    default:
      return state;
  } 
}