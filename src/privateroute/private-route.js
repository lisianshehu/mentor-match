import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom';
import Login from '../login-page/login-page';
import store from '../store';

const PrivateRoute = ({ component: Component, loggedIn, path, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            store.getState().isLoggedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute