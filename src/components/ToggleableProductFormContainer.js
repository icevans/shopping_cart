import React from 'react';
import { connect } from 'react-redux';
import ToggleableProductForm from './ToggleableProductForm';
import client from '../lib/client';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: async (product, resetState) => {
      try {
        let newProduct = await client.post('/api/products', product);

        dispatch({
          type:'PRODUCT_ADDED',
          payload: {
            product: newProduct,
          },
        });

        resetState ? resetState() : null;
      } catch (error) {
        console.error('Something went wrong!');
        console.error(error);
      }
    }
  }
};

const mapStateToProps = (state) => {
  return {
    
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleableProductForm);
