import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckout: (evt) => {
      evt.preventDefault();
      dispatch({ type: 'CART_CHECKED_OUT' });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
