import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Auth from './pages/auth/page/Auth';

function App() {
 return (
  <BrowserRouter>
   <Switch>
    <Route exact path="/">
     <Auth />
    </Route>
    <Route path="/home">
     <Home />
    </Route>
   </Switch>
  </BrowserRouter>
 );
}

export default App;
