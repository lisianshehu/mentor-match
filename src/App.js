import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './signup-page/signup';
import Login from './login-page/login-page';
import Home from './home/home';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/login' component={Login}></Route>
      </Switch>
    </main>
  );
}

export default App;
