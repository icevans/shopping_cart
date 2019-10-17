import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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
    default:
      return state;
  }
};

const cart = (state = [], action) => {
  return state;
};

const rootReducer = combineReducers({
  products,
  cart
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
