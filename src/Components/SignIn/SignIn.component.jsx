import React from 'react';

import './SignIn.styles.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      email:'',
      password:''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email:'', password:''})
  }

  handleChange = event =>{
    const {value, name} = event.target;

    this.setState({ [name]:value})
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput
          name='email'
          type='email'
          value={this.state.email}
          handleChange={this.handleChange}
          label='email'
          required/>

          <FormInput 
          name='password' 
          type='password' 
          value={this.state.password} 
          handleChange={this.handleChange} 
          label='password'
          required/>

          <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }

}

export default SignIn