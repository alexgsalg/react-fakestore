import { CART_ACTION_TYPES } from './cart.types';

// TYPES
export type Action<T> = { type: T };
export type ActionAndPayload<T, P> = {
  type: T;
  payload: P;
};

// FUCTION OVERLOAD
export function createAction<T extends string>(type: T, payload: void): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionAndPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// ACTIONS
export const setCartOpenStatus = (boolean: boolean) => {
  console.log('toggle cart', boolean);
  return createAction(CART_ACTION_TYPES.SET_CART_OPEN_STATUS, boolean);
};
