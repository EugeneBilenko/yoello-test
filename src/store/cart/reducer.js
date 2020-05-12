import {
  UPD_ITEM_IN_CART,
  CLEAR_CART
} from './constants';

const currentCart = JSON.parse(sessionStorage.getItem('currentCart')) || {};

const initialState = {
  products: currentCart.products || [],
  total: currentCart.total || 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case UPD_ITEM_IN_CART:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total
      };
    case CLEAR_CART:
      return {
        products: [],
        total: 0
      };
    default:
      return state;
  }
};

export default cart;
