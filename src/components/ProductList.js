import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {props.products.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductList;
