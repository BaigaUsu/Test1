// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // Добавляем cartReducer

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer, // Добавили редьюсер корзины
    },
  });
};

// Типы для Redux
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];