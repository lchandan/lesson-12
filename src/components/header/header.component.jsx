import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <div>
        {
        currentUser? <div><b>Welcome </b><span>{currentUser.displayName}</span></div> : ''    
      }</div>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT 
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {!hidden? <CartDropDown/> : ''}
  </div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => {
 return {
    currentUser,
    hidden
  }
}
  

export default connect(mapStateToProps, null)(Header);
