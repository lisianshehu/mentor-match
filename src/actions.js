const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';

function setLoginSuccess(isLoginSuccess)
{
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function login()
{
    return dispatch => {
        dispatch(setLoginSuccess(true))
    }
}