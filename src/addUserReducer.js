const initialState = { userList: [] }

export default function addUserReducer(state = initialState, action){
    if (action.type === 'ADD_SEARCHED_USER') {
        return Object.assign({}, state, {
          userList: state.userList.concat(action.inputUsername)
        });
      }
      return state;
}