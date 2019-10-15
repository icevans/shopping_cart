import React from 'react';

const ProductForm = (props) => {
  return (
    <div>
      <h3>{ props.isEdit ? 'Update' : 'Add' } Product</h3>
      <form onSubmit={props.handleSubmit}>
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
          <input type="submit" className="button" value={ props.isEdit ? 'Update' : 'Add'} />
          <a className="button" onClick={props.onCancel}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
