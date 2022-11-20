import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducers';

export const store = createStore(rootReducer);
