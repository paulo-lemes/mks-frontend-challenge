import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { defaultProduct } from "@/util";

describe("ProductCard component", () => {
  it("should render without errors", () => {
    const { getByText, getByAltText, getByRole } = render(
      <ProductCard {...defaultProduct} />
    );

    const productImage = getByAltText(/Imagem do produto Name/i);
    expect(productImage).toBeInTheDocument();

    const title = getByText(/Name/i);
    expect(title).toBeInTheDocument();

    const price = getByText("R$10");
    expect(price).toBeInTheDocument();

    const description = getByText(/Description/i);
    expect(description).toBeInTheDocument();

    const buyButton = getByRole("button");
    expect(buyButton).toBeInTheDocument();

    const buttonImage = getByAltText(/Ícone de bolsa de compras/i);
    expect(buttonImage).toBeInTheDocument();
  });

  it("should render cart quantity on Header component after button click", () => {
    const { getByRole, getByText, findByText } = render(
      <>
        <Header />
        <ProductCard {...defaultProduct} />
      </>
    );
    const cartQtyBefore = getByText("0");

    expect(cartQtyBefore).toBeInTheDocument();

    const buyButton = getByRole("button", {
      name: /comprar/i,
    });
    fireEvent.click(buyButton);

    const cartQtyAfter = findByText("1");

    waitFor(() => expect(cartQtyAfter).toBeInTheDocument());
  });
});
