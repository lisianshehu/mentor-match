import React, { Component } from 'react';
import store from '../store'
import { logout } from '../actions'
import history from '../history'
import { connect } from 'react-redux';

const Logout = (dispatch) => {
    console.log(store.getState().user_name)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push('/login')
}

const mapStateToProps = state => {
    return {
        isLogoutSuccess: state.isLogoutSuccess
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      login: () => dispatch(logout)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Logout);