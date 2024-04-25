import React from "react";
import styled from "styled-components";
import { useProducts } from "@/pages/api";
import { Product } from "@/types";
import { ProductCard } from "../ProductCard";
import { ProductCardSkeleton } from "../ProductCardSkeleton";

const ProductListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 60px 30px;
  gap: 20px;

  @media (min-width: 900px) {
    padding: 150px 100px 120px;
    gap: 25px;
  }
`;

const ErrorDiv = styled.div`
  height: 100vh;
  padding: 100px 20px;

  & h3 {
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
`;

export function ProductList() {
  const { data, isLoading, isError } = useProducts();

  return (
    <>
      <ProductListDiv>
        {isLoading
          ? Array.from(new Array(8)).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : data.products &&
            data?.products.map((product: Product) => (
              <ProductCard {...product} key={product.id} />
            ))}
      </ProductListDiv>
      {isError && (
        <ErrorDiv>
          <h3>Ocorreu um erro ao buscar produtos</h3>
        </ErrorDiv>
      )}
    </>
  );
}
