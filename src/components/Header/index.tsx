import React, { useState } from "react";
import styled from "styled-components";
import CartIcon from "./assets/cart.svg";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { Cart } from "../Cart";
import { motion } from "framer-motion";

const HeaderStyled = styled.header`
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  width: 100%;
  height: 50px;

  @media (min-width: 900px) {
    height: 100px;
  }
`;

const Title = styled.h1`
  color: var(--secondary-color);
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    font-size: 40px;
  }
`;

const TitleSpan = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  margin-top: 5px;
  margin-left: 8px;

  @media (min-width: 900px) {
    font-size: 20px;
    margin-top: 8px;
  }
`;

const CartButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 52px;
  height: 26px;
  border-radius: 8px;
  background-color: var(--secondary-color);
  padding: 0 15px 0 9px;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  @media (min-width: 900px) {
    width: 90px;
    height: 45px;
    font-size: 18px;
    padding: 0 25px 0 15px;

    & img {
      width: 20px;
      height: 20px;
    }
  }
`;

export function Header() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cart } = useCart();

  function toggleCart() {
    setShowCart((prev) => !prev);
  }

  return (
    <>
      <HeaderStyled>
        <Title>
          MKS <TitleSpan>Sistemas</TitleSpan>
        </Title>
        <CartButton
          as={motion.button}
          whileTap={{ scale: 0.95 }}
          onClick={toggleCart}
        >
          <Image
            src={CartIcon}
            alt="Ícone do carrinho de compras"
            unoptimized
          />
          <p>{cart?.reduce((acc, item) => acc + item.qty, 0)}</p>
        </CartButton>
      </HeaderStyled>
      <Cart showCart={showCart} onClose={toggleCart} cart={cart} />
    </>
  );
}
