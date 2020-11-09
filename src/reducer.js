
const initalState = {isLoggedIn: true}

export default function loginReducer(state = initalState,
    action){
        switch(action.type)
        {
            case "SET_LOGIN_SUCCESS":
                return{
                    ...state, 
                    isLoginSuccess: action.isLoginSuccess,
                    isLoggedIn: true
                };
            default:
                return state;
        }

    }