import React from 'react';
import store from '../lib/store';

class Cart extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  };

  handleCheckout = (evt) => {
    evt.preventDefault();
    store.dispatch({ type: 'CART_CHECKED_OUT' });
  };

  render() {
    let { cart } = store.getState();
    let total = cart.reduce((total, product) => {
      return total + (product.price * product.quantity)
    }, 0);

    total = Math.round(total * 100) / 100;

    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>

            {cart.map((product) => {
               return (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                  </tr>
               );
            })}

            <tr>
              <td colSpan="3" className="total">Total: {total}</td>
            </tr>
            </tbody>
          </table>
        <a
          className="button checkout"
          onClick={this.handleCheckout}
        >
         Checkout
        </a>
      </div>
    )
  };
};

export default Cart;
