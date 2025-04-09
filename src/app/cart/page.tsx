// app/cart/page.tsx
'use client'
import dynamic from 'next/dynamic';

// Динамически импортируем компонент Cart с отключением SSR
const NoSSR = dynamic(() => import('../Cart'), { ssr: false });

const CartPage = () => {
  console.log(typeof window === 'undefined' ? '🖥️ SSR' : '🌍 CSR');

  return (
    <div>
      <NoSSR/>
    </div>
  );
};

export default CartPage;