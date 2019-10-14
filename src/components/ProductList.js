import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {
        props.products.map(product => {
          return <Product />
        })
      }
    </div>
  )
}

export default ProductList;
