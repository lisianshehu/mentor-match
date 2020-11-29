import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUp from './signup-page/signup';
import Login from './login-page/login-page';
import Home from './home/home';
import PrivateRoute from './privateroute/private-route'
import ChatPage from './chat-page/chat-page'
import Logout from './logout/logout'
import LandingPage from './landing-page/landing-page'

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/logout' component={Logout}></Route>
        <PrivateRoute path='/chatpage' component={ChatPage}></PrivateRoute>
        <PrivateRoute path='/landing-page' component={LandingPage}></PrivateRoute>
      </Switch>
    </main>
  );
}

export default App;
