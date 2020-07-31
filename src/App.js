import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import {auth} from './firebase/firebase.utils';

import HomePage from './Pages/HomePage/HomePage.component'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import Header from './Components/Header/Header.component'
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({currentUser:user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
