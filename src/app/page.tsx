import AddToCartButton from "@/components/Buttons/AddToCartButton";
import { fetchProducts } from "@/lib/api/products";
import Link from "next/link";

export default async function ProductListPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h2>Товары</h2>
      <Link href="/cart">Cart</Link>
      <ul>
        {products.length === 0 ? (
          <p>Нет товаров</p>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price} ₽</p>
              <AddToCartButton product={product}/>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}