import React, { Component } from 'react';
import store from '../store'
import { logout } from '../actions'
import history from '../history'
import { connect } from 'react-redux';
import axios from 'axios'


const Logout = (dispatch) => {    
    
    axios({
        method: 'POST',
        url: "http://127.0.0.1:5000/user/logout/",
        data: {
            user_name: localStorage.getItem('user')
        }
    }).then((response)=>{
        if (response.data.status === 'success')
        {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            history.push('/login')
        }
    })

    return null
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