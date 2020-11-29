import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux'
import history from './history'
import store from './store'


ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById("root"));


serviceWorker.unregister();
