import React from 'react';

const Cart = (props) => {
  let total = props.cart.reduce((total, product) => {
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

          {props.cart.map((product) => {
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
        onClick={props.onCheckout}
      >
       Checkout
      </a>
    </div>
  )
};

export default Cart;
