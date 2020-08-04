import React from 'react';

import './SignInAndSignUp.styles.scss';

import SignIn from '../../Components/SignIn/SignIn.component'
import SignUp from '../../Components/SignUp/SignUp.component';

const SignInAndSignUp = () =>(
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
)

export default SignInAndSignUp;