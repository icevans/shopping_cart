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

  addToCart = (productId) => {
    const itemInCart = this.state.cart.find(item => {
      item.productId === productId
    });

    if (itemInCart) {
      const newCart = cart.map(item => {
        if (item === itemInCart) {
          /
        } else {

        }
      });
      this.setState(newCart);
    } else {
    }
  }

  componentDidMount() {
    this.setState({
      products: products,
      cart: [{productId: 1, quantity: 3}],
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
