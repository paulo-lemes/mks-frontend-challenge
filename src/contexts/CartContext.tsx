import { CartContextType, CartItem, ChildrenProps, Product } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  increaseProductQty: () => {},
  decreaseProductQty: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (cart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const productIndex = prev.findIndex(
        (item) => item.product.id === product.id
      );
      let updatedProducts = [];
      if (productIndex === -1) {
        updatedProducts = [...prev, { product, qty: 1 }];
      } else {
        updatedProducts = [...prev];
        updatedProducts[productIndex] = {
          product: product,
          qty: updatedProducts[productIndex].qty + 1,
        };
      }
      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  const deleteFromCart = (productId: number) => {
    setCart((prev) => {
      const updatedProducts = prev.filter(
        ({ product }) => product.id !== productId
      );
      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  const increaseProductQty = (productId: number) => {
    setCart((prev) => {
      const productIndex = prev.findIndex(
        ({ product }) => product.id === productId
      );
      const updatedProducts = [...prev];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        qty: updatedProducts[productIndex].qty + 1,
      };
      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  const decreaseProductQty = (productId: number) => {
    setCart((prev) => {
      const productIndex = prev.findIndex(
        ({ product }) => product.id === productId
      );
      let updatedProducts = [];
      if (prev[productIndex].qty > 1) {
        updatedProducts = [...prev];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          qty: updatedProducts[productIndex].qty - 1,
        };
      } else {
        updatedProducts = prev.filter((item) => item.product.id !== productId);
      }
      saveCart(updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        increaseProductQty,
        decreaseProductQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
