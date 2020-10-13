import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './signup-page/signup';
import Home from './home/home';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signup' component={SignUp}></Route>
      </Switch>
    </main>
  );
}

export default App;
