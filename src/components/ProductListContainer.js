import React from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import client from '../lib/client';

const mapDispatchToProps = (dispatch) => {
  return {
    onReceivedProducts: async () => {
      try {
        let products = await client.get('/api/products');
        dispatch({ type: 'PRODUCTS_RECEIVED', payload: { products } });
      } catch (error) {
        console.error('Something went wrong!');
        console.error(error);
      }
    },
    onAddToCart: (product) => {
      dispatch({
        type: 'PRODUCT_ADDED_TO_CART',
        payload: { product: product },
      });
    },
    onDeleteProduct: async (productId) => {
      try {
        await client.delete(`/api/products/${productId}`);

        dispatch({
          type: 'PRODUCT_DELETED',
          payload: {
            productId: productId,
          },
        });
      } catch (error) {
        console.error('Something went wrong!');
        console.error(error);
      }
    },
    onEditSubmit: async (productId, updatedProductFields) => {
      try {
        let updatedProduct = await client.put(
          `/api/products/${productId}`,
          updatedProductFields
        );

        dispatch({
          type: 'PRODUCT_UPDATED',
          payload: {
            product: updatedProduct,
          }
        });
      } catch (error) {
        console.error('Something went wrong!');
        console.error(error);
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
