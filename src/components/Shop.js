import React, { Component } from 'react';
import products from '../lib/data.js';
import Header from './Header.js';
import ProductList from './ProductList.js';
import AddForm from './AddForm.js';

class Shop extends Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.setState({
      products: products,
      cart: [{productId: 1, quantity: 4}],
    });
  }

  render() {
    return (
      <div id="app">
        <Header
          cart={this.state.cart}
          products={this.state.products}
        />

        <main>
          <ProductList products={this.state.products} />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default Shop;
