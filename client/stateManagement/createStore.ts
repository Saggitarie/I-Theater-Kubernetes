import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice, { initialState as authState } from './auth/slice';

const rootReducer = combineReducers({
  authentication: authSlice.reducer,
});

const preloadedState = () => {
  return {
    authentication: authState,
  };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV === 'development',
    preloadedState: preloadedState(),
  });
};

export default createStore;
