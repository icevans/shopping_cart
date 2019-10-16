import React, { Component } from 'react';

import Header from './Header.js';
import ProductList from './ProductList.js';
import ToggleableProductForm from './ToggleableProductForm.js';

import client from '../lib/client.js';

class Shop extends Component {
  state = {
    products: [],
    cart: [],
  };

  handleAddToCart = (productId) => { // TODO
    const product = this.state.products.find((product) => (product.id === productId));
    const productInCart = this.state.cart.find(item => (item.id === productId));

    if (product.quantity < 1) {
      alert('Out of stock!');
      return;
    }

    if (productInCart) {
      const newCart = this.state.cart.map(item => {
        if (item.id === productId) {
          return Object.assign({}, item, { quantity: item.quantity + 1 });
        } else {
          return item;
        }
      });
      this.setState({ cart: newCart });
    } else {
      let newCartItem = { title: product.title, price: product.price, quantity: 1, id: product.id };
      this.setState({ cart: [...this.state.cart, newCartItem] });
    }

    product.quantity -= 1;
  }

  async componentDidMount() {
    try {
      let products = await client.get('/api/products');

      this.setState({ products: products });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  }

  handleAddProduct = async (product) => {
    try {
      let newProduct = await client.post('/api/products', product);

      this.setState({
        products: [...this.state.products, newProduct]
      });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  }

  handleEditProduct = async (id, product) => {
    try {
      let updatedProduct = await client.put(`/api/products/${id}`, product);

      let updatedProducts = this.state.products.map((product) => {
        if (product.id === id) {
          return updatedProduct;
        } else {
          return product;
        }
      });

      let newCart = this.state.cart.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {
        	title: product.title,
        	price: product.price
          });
        } else {
          return item;
        }
      });

      this.setState({ products: updatedProducts, cart: newCart });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  };

  handleDeleteProduct = async (id) => {
    try {
      let updatedProducts = await client.delete(`/api/products/${id}`);

      this.setState({ products: updatedProducts });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  };

  handleCheckout = (evt) => {
    evt.preventDefault();
    this.setState({ cart: [] });
  };

  render() {
    return (
      <div id="app">
        <Header
          cart={this.state.cart}
          onCheckout={this.handleCheckout}
        />

        <main>
          <ProductList
            products={this.state.products}
            onEditProduct={this.handleEditProduct}
            onAddToCart={this.handleAddToCart}
            onDeleteProduct={this.handleDeleteProduct}
          />

          <ToggleableProductForm onSubmit={this.handleAddProduct} />
        </main>
      </div>
    );
  }
}

export default Shop;
