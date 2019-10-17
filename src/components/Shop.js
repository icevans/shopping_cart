import React, { Component } from 'react';

import Header from './Header.js';
import ProductList from './ProductList.js';
import ToggleableProductForm from './ToggleableProductForm.js';

import client from '../lib/client.js';
import store from '../store';

class Shop extends Component {
  products = store.getState().products;

  state = { cart: [] }
  cart = this.state.cart;

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

  handleAddToCart = (productId) => { // TODO
    const product = this.products.find((product) => (product.id === productId));
    const productInCart = this.cart.find(item => (item.id === productId));

    if (product.quantity < 1) {
      alert('Out of stock!');
      return;
    }

    if (productInCart) {
      const newCart = this.cart.map(item => {
        if (item.id === productId) {
          return Object.assign({}, item, { quantity: item.quantity + 1 });
        } else {
          return item;
        }
      });
      this.setState({ cart: newCart });
    } else {
      let newCartItem = { title: product.title, price: product.price, quantity: 1, id: product.id };
      this.setState({ cart: [...this.cart, newCartItem] });
    }

    product.quantity -= 1;
  }

  handleCheckout = (evt) => {
    evt.preventDefault();
    this.setState({ cart: [] });
  };

  render() {
    return (
      <div id="app">
        <Header
          cart={this.cart}
          onCheckout={this.handleCheckout}
        />

        <main>
          <ProductList
            products={store.getState().products}
            onAddToCart={this.handleAddToCart}
          />

          <ToggleableProductForm />
        </main>
      </div>
    );
  }
}

export default Shop;
