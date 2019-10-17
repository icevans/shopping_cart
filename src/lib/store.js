import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import products from './reducers/products';
import cart from './reducers/cart';

const rootReducer = combineReducers({ products, cart });
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
