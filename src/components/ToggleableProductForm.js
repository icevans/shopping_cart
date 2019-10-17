import React from "react";
import ProductForm from "./ProductForm";

import client from '../lib/client';
import store from '../lib/store';

class ToggleableProductForm extends React.Component {
  state = {
    formVisibility: "",
    title: "",
    price: "",
    quantity: ""
  };

  handleFormToggle = evt => {
    evt.preventDefault();
    this.setState({
      formVisibility: this.state.formVisibility === "" ? "visible" : ""
    });
  };

  handleInputChange = evt => {
    let fieldName = evt.target.name;
    let fieldValue = evt.target.value;

    this.setState({ [fieldName]: fieldValue });
  };

  handleCancel = evt => {
    evt.preventDefault();
    this.setState({ title: "", price: "", quantity: "", formVisibility: "" });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    try {
      let { formVisibility, ...product } = this.state;
      let newProduct = await client.post('/api/products', product);

      store.dispatch({
        type:'PRODUCT_ADDED',
        payload: {
          product: newProduct,
        },
      });
      this.setState({ title: "", price: "", quantity: "", formVisibility: "" });
    } catch (error) {
      console.error('Something went wrong!');
      console.error(error);
    }
  }

  render() {
    return (
      <div className={`add-form ${this.state.formVisibility}`}>
        <p>
          <a
            className="button add-product-button"
            onClick={this.handleFormToggle}
          >
            Add A Product
          </a>
        </p>
        <h3>Add Product </h3>
        <ProductForm
          onCancel={this.handleCancel}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
          title={this.state.title}
          price={this.state.price}
          quantity={this.state.quantity}
        />
      </div>
    );
  }
}

export default ToggleableProductForm;
