import React from 'react';
import ToggleableProduct from './ToggleableProduct';
import store from '../lib/store';
import client from '../lib/client';

class ProductList extends React.Component {
  componentDidMount() {
    this.props.onReceivedProducts();
  }

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {this.props.products.map(product => (
          <ToggleableProduct
            key={product.id}
            product={product}
            onDeleteProduct={this.props.onDeleteProduct}
            onEditSubmit={this.props.onEditSubmit}
            onAddToCart={this.props.onAddToCart}
          />
        ))}
      </div>
    )
  }
}

export default ProductList;
