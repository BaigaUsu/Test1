export const loadFromLocalStorage = <T>(key: string): T[] => {
  if (typeof window === 'undefined') return [];
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
};

export const saveToLocalStorage = <T>(key: string, items: T[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};