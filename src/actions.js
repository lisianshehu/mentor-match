const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGOUT_SUCCESS = 'SET_LOGOUT_SUCCESS';

const ADD_SEARCHED_USER = 'ADD_SEARCHED_USER'; 

function setLoginSuccess(isLoginSuccess)
{
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLogoutSuccess(isLogoutSuccess)
{
    return {
        type: SET_LOGOUT_SUCCESS,
        isLogoutSuccess
    };
}

export function login()
{
    return dispatch => {
        dispatch(setLoginSuccess(true))
    }
}

export function logout()
{
    return dispatch => {
        dispatch(setLogoutSuccess(true))
    }
}

export function addUser(addedUser)
{
    let inputUsername = addedUser.inputUsername
    return {type: ADD_SEARCHED_USER, inputUsername};
}