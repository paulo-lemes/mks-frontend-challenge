import React from "react";
import { CartItem } from "@/types";
import styled from "styled-components";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const CartItemStyled = styled.article`
  width: 250px;
  height: 220px;
  border-radius: 8px;
  background: var(--secondary-color);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  padding: 20px;
  flex-shrink: 0.5;

  @media (min-width: 900px) {
    width: 370px;
    height: 95px;
    padding: 15px;
  }
`;

const ItemInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`;

const ItemQtyPriceDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    max-width: 150px;
  }
`;

const PriceBoxDiv = styled.div`
  width: 84px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: #373737;

  @media (min-width: 900px) {
    background: transparent;
  }
`;

const Price = styled.p`
  color: var(--secondary-color);
  text-align: center;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0;

  @media (min-width: 900px) {
    font-size: 12px;
    color: #000;
  }
`;

const QtyBoxDiv = styled.div`
  width: 97.368px;
  height: 34.499px;
  flex-shrink: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;

  @media (min-width: 900px) {
    width: 50px;
    height: 19px;
    flex-shrink: 0;
    font-size: 12px;
  }
`;

const QtyButton = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  @media (min-width: 900px) {
    font-size: 12px;
    padding: 0 5px;
  }
`;

const Qty = styled.p`
  text-align: center;
  width: 30px;
  height: 26px;
  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;

  @media (min-width: 900px) {
    width: 16px;
    height: 12px;
    flex-shrink: 0;
    margin: 0;
  }
`;

const ItemTitle = styled.h3`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  height: 21px;
  margin: 5px 5px 10px 0;

  @media (min-width: 900px) {
    font-size: 13px;
    line-height: 17px;
    width: 100px;
    height: 33px;
    margin: 0;
  }
`;

const RemoveProductButton = styled.button`
  position: relative;
  float: right;
  margin: -20px -15px;
  color: #000;
  font-size: 38px;
  font-weight: 500;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 900px) {
    color: var(--secondary-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    background-color: #000;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: -25px -20px;
  }
`;

const Figure = styled.figure`
  padding: 0;
  margin: 0;
  @media (min-width: 900px) {
    & img {
      width: 60px;
      height: 60px;
    }
  }
`;

export function CartItemCard(cartItem: CartItem) {
  const { deleteFromCart, increaseProductQty, decreaseProductQty } = useCart();

  return (
    <CartItemStyled data-testid="cartItemCard">
      <RemoveProductButton
        as={motion.button}
        whileTap={{ scale: 0.95 }}
        onClick={() => deleteFromCart(cartItem.product.id)}
      >
        X
      </RemoveProductButton>
      <ItemInfoSection>
        <Figure>
          <Image
            src={cartItem.product.photo}
            alt={`Imagem do produto ${cartItem.product.name}`}
            unoptimized
            width={100}
            height={100}
          />
        </Figure>
        <ItemTitle>{cartItem.product.name}</ItemTitle>
        <ItemQtyPriceDiv>
          <QtyBoxDiv>
            <QtyButton
              as={motion.button}
              whileTap={{ scale: 0.95 }}
              onClick={() => decreaseProductQty(cartItem.product.id)}
            >
              -
            </QtyButton>
            <Qty data-testid="productQty">{cartItem.qty}</Qty>
            <QtyButton
              as={motion.button}
              whileTap={{ scale: 0.95 }}
              onClick={() => increaseProductQty(cartItem.product.id)}
            >
              +
            </QtyButton>
          </QtyBoxDiv>
          <PriceBoxDiv>
            <Price>R${cartItem.product.price.slice(0, -3)}</Price>
          </PriceBoxDiv>
        </ItemQtyPriceDiv>
      </ItemInfoSection>
    </CartItemStyled>
  );
}
