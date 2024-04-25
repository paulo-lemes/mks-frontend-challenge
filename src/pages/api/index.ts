import { useQuery } from "react-query";

const getProductsApi = async () => {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=brand&orderBy=ASC"
  ).catch((error) => {
    console.error("Erro: " + error.message);
    return null;
  });
  if (!response || !response.ok) {
    console.error("Problema ao obter os produtos");
    return [];
  }
  return response.json();
};

export const useProducts = () => useQuery("products", getProductsApi);
