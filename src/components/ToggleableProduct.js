import React from 'react';
import EditProductForm from './EditProductForm';

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

  handleAddToCart = (productId) => {
    return (evt) => {
      evt.preventDefault();
      this.props.onAddToCart(productId);
    }
  };

  handleDeleteProduct = (productId) => {
    return (evt) => {
      evt.preventDefault();
      this.props.onDeleteProduct(productId);
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
                onClick={this.handleAddToCart(product.id)}
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
            onClick={this.handleDeleteProduct(product.id)}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    );
  }
};

export default ToggleableProduct;
