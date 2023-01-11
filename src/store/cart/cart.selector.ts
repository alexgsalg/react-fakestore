import { createSelector } from 'reselect';
import { ProductType } from '../../models/products.model';

const selectCartReducer = (state: any) => state.cart;

export const selectCartStatus = createSelector([selectCartReducer], (cart) => cart.cartOpenStatus);

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

export const selectCarCount = createSelector([selectCartReducer], (cart) =>
  cart.cartItems
    ? cart.cartItems?.reduce(
        (total: number, item: ProductType) => total + (item.quantity as number),
        0,
      )
    : 0,
);

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
  cart.cartItems.reduce(
    (total: number, item: ProductType) => total + (item.quantity as number) * item.price,
    0,
  ),
);
