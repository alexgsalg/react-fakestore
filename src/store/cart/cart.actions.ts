import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer.utils';
import { ProductType } from '../../models/products.model';

////////////////////////////////////////////////////////////////////////////////
// ACTIONS
////////////////////////////////////////////////////////////////////////////////
export const setCartOpenStatus = (boolean: boolean) => {
  console.log('toggle cart', boolean);
  return createAction(CART_ACTION_TYPES.SET_CART_OPEN_STATUS, boolean);
};

export const addItemToCart = (cartItems: ProductType[], productToAdd: ProductType) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: ProductType[], productToRemove: ProductType) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCartItems = (cartItems: ProductType[], productToClear: ProductType) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////
const addCartItem = (cartItems: ProductType[], productToAdd: ProductType) => {
  // check if item already exists
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  // if exists increment the quantity
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: (item.quantity as number) + 1 } : item,
    );
  }

  // if exists increment the quantity
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: ProductType[], productToRemove: ProductType) => {
  // check if item already exists
  const existingItem = cartItems.find((item) => item.id === productToRemove.id);

  // if exists and quantity is 1, remove the item from cart
  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  // if exists and quantity is greater than 1, remove 1 unit from quantity
  return cartItems.map((item) => {
    return item.id === productToRemove.id
      ? { ...item, quantity: (item.quantity as number) - 1 }
      : item;
  });
};

const clearCartItem = (cartItems: ProductType[], productToClear: ProductType) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};
