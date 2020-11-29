const initialState = { userList: [] }

export default function addUserReducer(state = initialState, action){
    if (action.type === 'ADD_SEARCHED_USER') {
        if (state.userList.includes(action.inputUsername)){
          alert("User has already been added to your chat list!")
          return state
        }
        return Object.assign({}, state, {
          userList: state.userList.concat(action.inputUsername)
        });
      }
      return state;
}