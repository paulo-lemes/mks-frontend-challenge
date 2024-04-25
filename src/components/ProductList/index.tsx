import React from "react";
import styled from "styled-components";
import { useProducts } from "@/pages/api";

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
        {/* {isLoading && products.map} */}         
      </ProductListDiv>
      {isError && (
        <ErrorDiv>
          <h3>Ocorreu um erro ao buscar produtos</h3>
        </ErrorDiv>
      )}
    </>
  );
}
