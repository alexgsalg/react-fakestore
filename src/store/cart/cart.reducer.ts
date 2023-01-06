import { ActionType, CART_ACTION_TYPES } from './cart.types';

export const CART_INITIAL_STATE = {
  cartItems: [],
  cartOpenStatus: false,
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action: ActionType) => {
  const { type, payload } = action as ActionType;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_CART_OPEN_STATUS:
      return {
        ...state,
        cartOpenStatus: payload,
      };
    case CART_ACTION_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    default:
      return state;
  }
};
