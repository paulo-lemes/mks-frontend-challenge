import React from "react";
import styled from "styled-components";
import CartIcon from "./assets/cart.svg";
import Image from "next/image";

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

const CartDiv = styled.div`
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
  return (
    <>
      <HeaderStyled>
        <Title>
          MKS <TitleSpan>Sistemas</TitleSpan>
        </Title>
        <CartDiv>
          <Image src={CartIcon} alt="Ícone do carrinho de compras" />
          <p>0</p>
        </CartDiv>
      </HeaderStyled>
    </>
  );
}
