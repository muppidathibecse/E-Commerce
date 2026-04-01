import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartItem = any;

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (orderId: number) => void;
  updateQuantity: (orderId: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderCounter, setOrderCounter] = useState(1000);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [
      ...prev,
      { orderId: orderCounter, ...item, numberOfProducts: 1 },
    ]);
    setOrderCounter((prev) => prev + 1);
  };

  const updateQuantity = (orderId: number, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.orderId === orderId
          ? { ...item, numberOfProducts: quantity }
          : item,
      ),
    );
  };

  const removeFromCart = (orderId: number) => {
    setCartItems((prev) => prev.filter((item) => item.orderId !== orderId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
