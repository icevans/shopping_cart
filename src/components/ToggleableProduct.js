import React from 'react';
import EditProductForm from './EditProductForm';

import store from '../lib/store';
import client from '../lib/client';

class ToggleableProduct extends React.Component {
  state = {
    productFormVisible: false,
  };

  handleEditToggle = (evt) => {
    evt.preventDefault();

    this.setState((prevState) => {
      return { productFormVisible: !prevState.productFormVisible };
    });
  };

  handleAddToCart = (evt) => { // TODO
    evt.preventDefault();

    if (this.props.product.quantity < 1) {
      alert('Out of stock!');
      return;
    }

    store.dispatch({
      type: 'PRODUCT_ADDED_TO_CART',
      payload: { product: this.props.product },
    });
  }

  handleDeleteProduct = async (evt) => {
    evt.preventDefault();
    try {
      let id = this.props.product.id;
      await client.delete(`/api/products/${id}`);

      store.dispatch({
        type: 'PRODUCT_DELETED',
        payload: {
          productId: id,
        },
      });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  };

  handleCancel = (evt) => {
    evt.preventDefault();
    this.setState({ productFormVisible: false });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="product">
        <div className="product-details">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className={"quantity"}>
            {product.quantity} left in stock
          </p>
          {this.state.productFormVisible ? (
            <EditProductForm
              onEditProduct={this.props.onEditProduct}
              product={product}
              onToggleEdit={this.handleEditToggle}
              isEdit={this.state.productFormVisible}
              onCancel={this.handleCancel}
            />
          ) : (
            <div className="actions product-actions">
              <a
                className={"button add-to-cart"}
                onClick={this.handleAddToCart}
              >
                Add to Cart
              </a>
              <a className="button edit" onClick={this.handleEditToggle}>
                Edit
              </a>
            </div>
          )}

          <a
            className="delete-button"
            onClick={this.handleDeleteProduct}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
};

export default ToggleableProduct;
