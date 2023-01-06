import { createSelector } from 'reselect';

const selectCartReducer = (state: any) => state.cart;

export const selectCartStatus = createSelector([selectCartReducer], (cart) => cart.cartOpenStatus);

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);
