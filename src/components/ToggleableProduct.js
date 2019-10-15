import React from 'react';

import Product from './Product'
import ProductForm from './ProductForm'

class ToggleableProduct extends React.Component {
  state = {
    productFormVisible: false,
    title: this.props.product.title,
    price: this.props.product.price,
    quantity: this.props.product.quantity,
  };

  handleEditToggle = (evt) => {
    evt.preventDefault();

    this.setState((prevState) => {
      return { productFormVisible: !prevState.productFormVisible };
    });
  };

  handleEditSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleEditProduct(this.props.product.id, {
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity,
    });
    this.setState({ productFormVisible: false });
  };

  handleInputChange = (evt) => {
    let fieldName = evt.target.name;
    let fieldValue = evt.target.value;

    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    return (
      <div className="product">
        <Product
          title={this.props.product.title}
          price={this.props.product.price}
          quantity={this.props.product.quantity}
          onEditToggle={this.handleEditToggle}
        />

        {this.state.productFormVisible ? (
          <ProductForm
            title={this.state.title}
            price={this.state.price}
            quantity={this.state.quantity}
            onInputChange={this.handleInputChange}
            isEdit={true}
            handleSubmit={this.handleEditSubmit}
           />
          ) : ''}
      </div>
    );
  }
};

export default ToggleableProduct;
