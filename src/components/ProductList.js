import React from 'react';
import ToggleableProduct from './ToggleableProduct';

const ProductList = (props) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {props.products.map(product => (
        <ToggleableProduct
          key={product.id}
          product={product}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList;
