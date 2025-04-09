import { Product } from "./types";

export interface CartItem extends Product {
totalPrice: number; 
}

export interface CartState {
  items: CartItem[];
}
