import React from 'react';

import './SignInAndSignUpPage.styles.scss';

import SignIn from '../../Components/SignIn/SignIn.component'
import SignUp from '../../Components/SignUp/SignUp.component';

const SignInAndSignUpPage = () =>(
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
)

export default SignInAndSignUpPage;