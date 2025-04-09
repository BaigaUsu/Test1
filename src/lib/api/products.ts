import { Product } from "../types/types";

export const fetchProducts = async (): Promise<Product[]> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  const response = await fetch("https://67dadf7435c87309f52e6b2d.mockapi.io/test/v1/users", {
    cache: "no-store",
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`);
  }

  return response.json();
};