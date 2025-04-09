import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { loadFromLocalStorage } from '../utils.ts/localStorage';
import { setCartItems } from '../features/cart/cartSlice';
import { CartItem } from '../types/cartTypes';

export const useLoadCart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartItems = loadFromLocalStorage<CartItem>('cartItems');
    dispatch(setCartItems(cartItems)); // Загружаем данные в Redux store
  }, [dispatch]);
};