import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom';
import store from '../store';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            store.getState().loginReducer.isLoggedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute