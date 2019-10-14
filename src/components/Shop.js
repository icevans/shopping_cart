import React, { Component } from 'react';
import products from '../lib/data.js';
import Header from './Header.js';
import ProductList from './ProductList.js';
import AddForm from './AddForm.js';

class Shop extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: products,
    });
  }

  render() {
    return (
      <div id="app">
        <Header />

        <main>
          <ProductList products={this.state.products} />
          <AddForm />
        </main>
      </div>
    );
  }
}

export default Shop;
