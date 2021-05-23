import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children,inverted, isGoogleSignIn, ...otherProps }) => {

  //console.log("children", children)
  
  return (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);}

export default CustomButton;
