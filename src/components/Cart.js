import React from 'react';

const Cart = () => {
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
          <tr>
            <td>Amazon Kindle E-reader</td>
            <td>2</td>
            <td>$79.99</td>
          </tr>
          <tr>
            <td>Apple 10.5-Inch iPad Pro</td>
            <td>1</td>
            <td>$649.99</td>
          </tr>

          <tr>
            <td colSpan="3" className="total">Total: $729.98</td>
          </tr>
          </tbody>
        </table>
      <a className="button checkout">Checkout</a>
    </div>
  )
};

export default Cart;
