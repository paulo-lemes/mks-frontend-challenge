import { CartProps } from "@/types";
import React from "react";
import styled from "styled-components";
import { CartItemCard } from "../CartItemCard";

const Overflow = styled.div`
  inset: 0;
  position: fixed;
`;

const CartSection = styled.section`
  width: 85%;
  max-width: 486px;
  flex-grow: 1;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  position: fixed;
  z-index: 1;
  padding: 25px 30px 0;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  @media (min-width: 900px) {
    padding: 36px 45px 0;
  }
`;

const CartTitle = styled.h2`
  width: 178px;
  height: 37px;
  flex-shrink: 0;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  margin: 0;
`;

const CloseCartButton = styled.button`
  position: fixed;
  top: 26px;
  right: 15px;
  color: var(--secondary-color);
  font-size: 35px;
  font-weight: 500;
  background-color: #000;
  border: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

const PurchaseButton = styled.button`
  width: 100%;
  color: var(--secondary-color);
  background-color: #000;
  border: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 15px;
  height: 65px;
  cursor: pointer;

  @media (min-width: 900px) {
    font-size: 28px;
    height: 97px;
  }
`;

const CartItemsSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 50px;
  padding-top: 10px;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  max-height: 50vh;
  overflow: auto;
`;

const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
`;

const CartFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const EmptyCartTitle = styled.h3`
  margin: 120px 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

export function Cart({ onClose, cart }: CartProps) {
  return (
    <>
      <Overflow onClick={onClose} />
      <CartSection>
        <CartTitle>Carrinho de compras</CartTitle>
        <CloseCartButton onClick={onClose}>X</CloseCartButton>
        {!cart.length ? (
          <EmptyCartTitle>Nenhum produto adicionado</EmptyCartTitle>
        ) : (
          <>
            <CartItemsSection>
              {cart?.map((item) => (
                <CartItemCard {...item} key={item.product.id} />
              ))}
            </CartItemsSection>
            <CartFooter>
              <TotalPriceDiv>
                <h4>Total:</h4>
                <h4>
                  R$
                  {cart?.reduce(
                    (acc, item) => acc + Number(item.product.price) * item.qty,
                    0
                  )}
                </h4>
              </TotalPriceDiv>
              <PurchaseButton>Finalizar Compra</PurchaseButton>
            </CartFooter>
          </>
        )}
      </CartSection>
    </>
  );
}
