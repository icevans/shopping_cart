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
          onEditProduct={props.onEditProduct}
          onAddToCart={props.onAddToCart}
          onDeleteProduct={props.onDeleteProduct}
        />
      ))}
    </div>
  )
}

export default ProductList;
