import React from 'react';

import Header from './Header.js';
import ProductList from './ProductList.js';
import ToggleableProductForm from './ToggleableProductForm.js';

const Shop = () => {
  return (
    <div id="app">
      <Header />

      <main>
        <ProductList />
        <ToggleableProductForm />
      </main>
    </div>
  );
}

export default Shop;
