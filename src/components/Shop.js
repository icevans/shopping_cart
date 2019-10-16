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

  addToCart = (productId) => { // TODO
    const itemInCart = this.state.cart.find(item => {
      return item.productId === productId
    });

    if (itemInCart) {
      const newCart = this.state.cart.map(item => (item));
      this.setState(newCart);
    } else {
    }
  }

  async componentDidMount() {
    try {
      let products = await client.get('/api/products');

      this.setState({
        products: products,
      });
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

      this.setState({ products: updatedProducts });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  }


  render() {
    return (
      <div id="app">
        <Header cart={this.state.cart} products={this.state.products} />

        <main>
          <ProductList products={this.state.products} onEditProduct={this.handleEditProduct} />

          <ToggleableProductForm onSubmit={this.handleAddProduct} />
        </main>
      </div>
    );
  }
}

export default Shop;
