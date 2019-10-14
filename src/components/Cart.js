import React from 'react';

const Cart = ({cart, products}) => {
  let total = cart.reduce((total, {productId, quantity}) => {
    let product = products.find(product => product.id === productId);
    return total + (product.price * quantity)
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

          {cart.map(({productId, quantity}) => {
            let product = products.find(product => product.id === productId);

             return (
                <tr>
                  <td>{product.title}</td>
                  <td>{quantity}</td>
                  <td>{product.price}</td>
                </tr>
             );
          })}

          <tr>
            <td colSpan="3" className="total">Total: {total}</td>
          </tr>
          </tbody>
        </table>
      <a className="button checkout">Checkout</a>
    </div>
  )
};

export default Cart;
