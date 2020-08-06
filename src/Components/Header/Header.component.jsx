import React from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import './Header.styles.scss';
import {ReactComponent as Logo} from '../../Assets/crown.svg'

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

const Header = ({currentUser, hidden}) =>(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
      <div className='options'>
        <Link className='option' to='/shop'>Shop</Link>
        <Link className='option' to='/shop'>Contact</Link>
        {
          currentUser ?
          <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>:
          <Link className='option' to='/signin'>Sign In</Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ? null :<CartDropdown/>
      } 
  </div>
)

const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) =>({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header)