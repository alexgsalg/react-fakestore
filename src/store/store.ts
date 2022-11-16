import { legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducers';

export const store = createStore(rootReducer);
