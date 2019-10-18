import React from 'react';

import Header from './Header.js';
import ProductListContainer from './ProductListContainer.js';
import ToggleableProductFormContainer from './ToggleableProductFormContainer.js';

const Shop = () => {
  return (
    <div id="app">
      <Header />

      <main>
        <ProductListContainer />
        <ToggleableProductFormContainer />
      </main>
    </div>
  );
}

export default Shop;
