import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "proscript_cart";

function loadCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage not available
  }
}

export default function useCart() {
  const [cartItems, setCartItems] = useState(loadCart);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const addToCart = useCallback((game) => {
    setCartItems((current) => {
      if (current.some((item) => item.id === game.id)) return current;
      return [...current, game];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const removeItems = useCallback((ids) => {
    setCartItems((current) => current.filter((item) => !ids.includes(item.id)));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = cartItems.length;

  return { cartItems, cartCount, addToCart, removeFromCart, removeItems, clearCart, setCartItems };
}
