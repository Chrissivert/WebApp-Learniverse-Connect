import React from 'react';
import blackCartIcon from '../../resources/images/cart/blackCart.png';
import whiteCartIcon from '../../resources/images/cart/whiteCart.png';
import "./cartStyling.css";


function CartIcon({ colorMode }) {
  return (
    <img
      src={colorMode === 'dark' ? blackCartIcon : whiteCartIcon}
      alt={colorMode === 'dark' ? 'Black Cart Icon' : 'White Cart Icon'}
      className="cart-icon" // Apply className from cart.css
    />
  );
}

export default CartIcon;
