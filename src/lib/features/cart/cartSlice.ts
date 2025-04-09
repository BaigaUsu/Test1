import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/lib/types/cartTypes';
import { saveToLocalStorage } from '@/lib/utils.ts/localStorage';

const initialState = {
  items: [] as CartItem[], // Теперь по умолчанию пустой массив
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      saveToLocalStorage('cartItems', state.items);
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveToLocalStorage('cartItems', state.items);
    },
    clearCart(state) {
      state.items = [];
      saveToLocalStorage('cartItems', state.items);
    },
  },
});

export const { setCartItems, addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;