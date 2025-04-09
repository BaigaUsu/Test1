"use client";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { addItemToCart } from "@/lib/features/cart/cartSlice";
import { Product } from "@/lib/types/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, totalPrice: product.price }));
  };

  return <button onClick={handleAddToCart}>Добавить в корзину</button>;
}