import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import './CartDropdown.styles.scss';

import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    {
      cartItems.length ? (
      cartItems.map(cartItem=>(
      <CartItem key={cartItem.id} item={cartItem}/>))
      ):(
      <span className='empty-message'>Your cart is empty!</span>)
    }
    <CustomButton onClick={()=> {
      history.push('./checkout');
      dispatch(toggleCartHidden());
      }}>Go To Checkout</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));