import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Go6vFW40jdP1LXm3yHP8Adrd0038lBYP6L';
  
  const ontoken = token =>{
    console.log(token)
    alert('Payment Successful!')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={ontoken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;
