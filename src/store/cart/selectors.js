const selectCart = state => state.cart;

export const selectProducts = state => selectCart(state).products;
export const selectTotal = state => selectCart(state).total;
