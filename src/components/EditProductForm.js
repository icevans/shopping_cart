import React from "react";
import ProductForm from "./ProductForm";

class EditProductForm extends React.Component {
  state = {
    title: this.props.product.title,
    price: this.props.product.price,
    quantity: this.props.product.quantity
  };

  handleEditSubmit = evt => {
    evt.preventDefault();
    this.props.onEditProduct(this.props.product.id, {
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity
    });
    this.props.onToggleEdit(evt);
  };

  handleInputChange = evt => {
    let fieldName = evt.target.name;
    let fieldValue = evt.target.value;

    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    return (
      <div className="edit-form">
        <h3>Update Product </h3>
        <ProductForm
          onSubmit={this.handleEditSubmit}
          title={this.state.title}
          price={this.state.price}
          quantity={this.state.quantity}
          onInputChange={this.handleInputChange}
          isEdit={this.props.isEdit}
          onCancel={this.props.onCancel}
        />
      </div>
    );
  }
}

export default EditProductForm;
