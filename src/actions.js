const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGOUT_SUCCESS = 'SET_LOGOUT_SUCCESS';

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