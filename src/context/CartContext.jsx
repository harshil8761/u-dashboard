import { createContext, useCallback, useMemo, useState } from "react";
import { Products } from "../assets/ProductData";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  },[]);

  const removeItem = useCallback((id) => {
    setCartItems((prev) => {
      return prev.filter(item => item.id !== id)
    })
  },[])

  const inc = useCallback((id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
  ),[]);

  const dec = useCallback((id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      ),
  ),[]);

  const getCartTotal = useMemo(() => {
      return cartItems.reduce((total,item) => total + item.price * item.quantity,0)
  },[cartItems])



  const value = {
    addToCart,
    Products,
    cartItems,
    inc,
    dec,
    getCartTotal,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
