import React from 'react';
import CartContainer from './CartContainer';

const Header = (props) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <CartContainer />
    </header>
  );
}

export default Header;
