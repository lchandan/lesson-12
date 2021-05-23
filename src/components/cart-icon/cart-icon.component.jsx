import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick = {toggleCartHidden} >
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
   
)

const mapStateToProps = ({ cart: { cartItems } }) => {

    console.log("cartItems", cartItems);
    return ({
        itemCount: cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity
        , 0)
    })
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);