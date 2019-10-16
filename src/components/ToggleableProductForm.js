import React from "react";
import ProductForm from "./ProductForm";

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
    this.setState({ title: "", price: "", quantity: "" });
    this.handleFormToggle(evt);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity
    });
    this.handleFormToggle(evt);
    this.setState({ title: "", price: "", quantity: "" });
  };

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
