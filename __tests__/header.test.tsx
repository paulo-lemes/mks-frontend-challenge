import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Header component", () => {
  it("should render without errors", () => {
    const { getByText, getByAltText } = render(<Header />);

    const title = getByText(/MKS/i);
    expect(title).toBeInTheDocument();

    const titleSpan = getByText(/Sistemas/i);
    expect(titleSpan).toBeInTheDocument();

    const cartIcon = getByAltText(/Ícone do carrinho de compras/i);
    expect(cartIcon).toBeInTheDocument();
  });

  it("should render Cart component on CartDiv click", () => {
    const { getByRole, getByText } = render(<Header />);

    const cartButton = getByRole("button");
    fireEvent.click(cartButton);

    const cartTitle = getByText(/Carrinho de compras/i);

    expect(cartTitle).toBeInTheDocument();
  });
});
