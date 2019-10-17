import React from 'react';
import ToggleableProduct from './ToggleableProduct';

import store from '../lib/store';
import client from '../lib/client';

class ProductList extends React.Component {
  async componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    try {
      let products = await client.get('/api/products');

      store.dispatch({ type: 'PRODUCTS_RECEIVED', payload: { products } });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  };

  render() {
    return (
      <div className="product-listing">
        <h2>Products</h2>
        {store.getState().products.map(product => (
          <ToggleableProduct
            key={product.id}
            product={product}
          />
        ))}
      </div>
    )
  }
}

export default ProductList;
