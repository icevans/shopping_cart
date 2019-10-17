const products = (state = [], action) => {
  switch (action.type) {
    case ('PRODUCTS_RECEIVED'):
      return state.concat(action.payload.products);
    case ('PRODUCT_UPDATED'):
      return state.map((product) => {
        if (product.id === action.payload.product.id) {
          return action.payload.product;
        } else {
          return product;
        }
      });
    case ('PRODUCT_ADDED'):
      return state.concat(action.payload.product);
    case ('PRODUCT_DELETED'):
      return state.filter((product) => product.id !== action.payload.productId);
    case ('PRODUCT_ADDED_TO_CART'):
      return state.map((product) => {
        if (product.id === action.payload.product.id) {
          return Object.assign({}, product, { quantity: product.quantity - 1 });
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};

export default products;
