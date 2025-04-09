import { useLoadCart } from '../lib/hooks/useLoadCart';
import { useAppDispatch, useAppSelector } from '../lib/hooks/hooks';
import { removeItemFromCart, clearCart } from '../lib/features/cart/cartSlice';
import { useMemo } from 'react';

export default function Cart() {
  useLoadCart(); // Загружаем корзину после первой загрузки страницы
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);

  const { quantity, totalPrice } = useMemo(() => {
    return cartItems.reduce(
      (summary, item) => {
        summary.quantity += item.quantity;
        summary.totalPrice += Number(item.totalPrice);
        return summary;
      },
      { quantity: 0, totalPrice: 0 }
    );
  }, [cartItems]);

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Цена за штуку: {item.price} ₽</p>
              <p>Кол-во: {item.quantity}</p>
              <p>Общая стоимость товара: {item.totalPrice} ₽</p>
              <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                Удалить
              </button>
            </div>
          ))}
          <h3>Общая стоимость корзины: {totalPrice} ₽</h3>
          <h4>Общее количество товаров: {quantity}</h4>
          <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>
        </>
      )}
    </div>
  );
}