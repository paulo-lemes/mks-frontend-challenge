import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type CartItem = {
  product: Product;
  qty: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  increaseProductQty: (productId: number) => void;
  decreaseProductQty: (productId: number) => void;
};

export type CartProps = {
  cart: CartItem[];
  onClose: () => void;
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};
