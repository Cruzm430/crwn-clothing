import React from 'react';
import {connect} from 'react-redux';


import './CartDropdown.styles.scss';

import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'/>
    {
      cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}/>)
    }
    <CustomButton>Go To Checkout</CustomButton>
  </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);