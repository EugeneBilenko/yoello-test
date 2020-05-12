import {
  UPD_ITEM_IN_CART,
  CLEAR_CART
} from './constants';

export const updateCart = (products, total) => ({type: UPD_ITEM_IN_CART, payload: { products, total }});
export const clearCart = () => ({type: CLEAR_CART});
