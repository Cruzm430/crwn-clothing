import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'; 
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect'

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user/user.selectors'

import HomePage from './Pages/HomePage/HomePage.component'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import Header from './Components/Header/Header.component'
import SignInAndSignUpPage from './Pages/SignInAndSignUpPage/SignInAndSignUpPage.component'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.component';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>) }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
 })


export default connect(mapStateToProps, mapDispatchToProps)(App);
