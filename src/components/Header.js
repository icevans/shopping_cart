import React from 'react';
import Cart from './Cart';

const Header = (props) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cart={props.cart} products={props.products} />
    </header>
  );
}

export default Header;
