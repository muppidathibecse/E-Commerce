import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type CartItem = any;

type CartContextType = {
  cartItems: CartItem[];
  wishItems: CartItem[];
  addToCart: (item: CartItem) => void;
  addWish: (item: CartItem) => void;
  toggleWish: (item: CartItem) => void;
  removeFromCart: (orderId: number) => void;
  removeFromWish: (orderId: number) => void;
  updateQuantity: (orderId: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishItems, setWishItems] = useState<CartItem[]>([]);
  const [wishCounter, setWishCounter] = useState(2000);
  const [orderCounter, setOrderCounter] = useState(1000);

  const addWish = (item: CartItem) => {
    setWishItems((prev) => [...prev, { wishId: wishCounter, ...item }]);
    setWishCounter((prev) => prev + 1);
  };

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

  const removeFromWish = (wishId: number) => {
    setWishItems((prev) => prev.filter((item) => item.wishId !== wishId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleWish = (item: CartItem) => {
    setWishItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, { wishId: wishCounter, ...item }];
      }
    });

    setWishCounter((prev) => prev + 1);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishItems,
        addToCart,
        toggleWish,
        addWish,
        removeFromCart,
        removeFromWish,
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
    throw new Error("Error");
  }

  return context;
};
