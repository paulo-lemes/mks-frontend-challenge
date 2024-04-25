import React from "react";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";

const Card = styled.article`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  padding: 10px 0 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 215px;
  margin-bottom: -4px;
`;

export function ProductCardSkeleton() {
  return (
    <Card>
      <Skeleton
        sx={{ height: 170, width: 170 }}
        animation="wave"
        variant="rectangular"
      />
      <DivStyled>
        <Skeleton animation="wave" height={50} width={130} />
        <Skeleton animation="wave" height={50} width={75} />
      </DivStyled>
      <Skeleton
        animation="wave"
        height={70}
        width={215}
        style={{ marginBottom: -8 }}
      />
      <Skeleton
        animation="wave"
        height={50}
        width={250}
        style={{ marginBottom: -10 }}
      />
    </Card>
  );
}
