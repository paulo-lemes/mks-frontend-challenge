import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ShoppingBag from "./assets/shopping-bag.svg";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";

const Card = styled.article`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

const Figure = styled.figure`
  margin: 0;
`;

const InfosSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
`;

const CardTitle = styled.h3`
  width: 50%;
  max-width: 63%;
  flex-grow: 1;
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  height: 43px;
  margin: 5px 5px 10px 0;
`;

const PriceBoxDiv = styled.div`
  width: 73.688px;
  height: 29.923px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: #373737;
`;

const Price = styled.p`
  color: var(--secondary-color);
  text-align: center;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 0;
`;

const Description = styled.p`
  color: #2c2c2c;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  height: 48px;
  overflow-y: auto;
`;

const BuyButton = styled.button`
  width: 100%;
  height: 35px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0px 0px 8px 8px;
  color: var(--secondary-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
`;

export function ProductCard(product: Product) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Figure>
        <Image
          src={product.photo}
          alt={`Imagem do produto ${product.name}`}
          width={170}
          height={170}
        />
      </Figure>
      <InfosSection>
        <CardTitle>{product.name}</CardTitle>
        <PriceBoxDiv>
          <Price>R${product.price.slice(0, -3)}</Price>
        </PriceBoxDiv>
        <Description>{product.description}</Description>
      </InfosSection>
      <BuyButton
        onClick={() => {
          addToCart(product);
        }}
      >
        <Image src={ShoppingBag} alt="Ícone de bolsa de compras" />
        COMPRAR
      </BuyButton>
    </Card>
  );
}
