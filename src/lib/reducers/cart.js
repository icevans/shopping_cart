const cart = (state = [], action) => {
  let product;

  switch (action.type) {
    case ('PRODUCT_ADDED_TO_CART'):
      product = action.payload.product;
      const productInCart = state.find(item => (item.id === product.id));

      if (productInCart) {
        const newCart = state.map(item => {
          if (item.id === product.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        });
        return newCart;
      } else {
        let newCartItem = { title: product.title, price: product.price, quantity: 1, id: product.id };
        return [...state, newCartItem];
      }
    case ('PRODUCT_UPDATED'):
      product = action.payload.product;

      return state.map(item => {
        if (item.id === product.id) {
          return Object.assign({}, item, {
            title: product.title,
            price: product.price
          });
        } else {
          return item;
        }
      });
    case ('CART_CHECKED_OUT'):
      return [];
    default:
      return state;
  }
};

export default cart;
