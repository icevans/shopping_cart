import React from "react";

const ProductForm = props => {
  return (
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          name="title"
          id="product-name"
          value={props.title}
          onChange={props.onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          name="price"
          id="product-price"
          value={props.price}
          onChange={props.onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          id="product-quantity"
          value={props.quantity}
          onChange={props.onInputChange}
        />
      </div>

      <div className="actions form-actions">
        <a className="button submit-button" onClick={props.onSubmit}>
          {props.isEdit ? "Update" : "Add"}
        </a>
        <a className="button cancel-button" onClick={props.onCancel}>
          Cancel
        </a>
      </div>
    </form>
  );
};

export default ProductForm;