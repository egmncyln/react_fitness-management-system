import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/">
     <Login />
    </Route>
    <Route path="/home">
     <Home />
    </Route>
   </Switch>
  </BrowserRouter>
 );
}

export default App;
