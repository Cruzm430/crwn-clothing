import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage/HomePage.component'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import Header from './Components/Header/Header.component'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
