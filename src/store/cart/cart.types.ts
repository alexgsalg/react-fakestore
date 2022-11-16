export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_OPEN_STATUS: 'SET_CART_OPEN_STATUS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

export type ActionType = {
  type: keyof typeof CART_ACTION_TYPES;
  payload: {};
};
