const addMenuDefaultState = '';

export default (state = addMenuDefaultState, action) => {
  switch(action.type){
    case 'SELECT_MENU_ADD_CPU':
      return action.menu;
    default:
      return state;
  }
}