
const user = localStorage.getItem('user')
console.log(user)

const initalState = user ? {isLoggedIn: true, user_name: user} : {isLoggedIn: false, user_name: ''}

export default function loginReducer(state = initalState,
    action){
        switch(action.type)
        {
            case "SET_LOGIN_SUCCESS":
                return{
                    ...state, 
                    isLoginSuccess: action.isLoginSuccess,
                    isLoggedIn: true,
                    user_name: action.payload.user_name
                };
            case "SET_LOGOUT_SUCCESS":
                return{
                    ...state,
                    isLogoutSuccess: action.isLogoutSuccess,
                    isLoggedIn: false,
                    user_name: ''
                }
            default:
                return state;
        }

    }