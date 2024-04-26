import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Cart } from "@/components/Cart";
import { defaultCart } from "@/util";

describe("Cart component", () => {
  it("should render without errors and show EmptyCartTitle", () => {
    const { getByText, getByRole } = render(
      <Cart showCart={true} onClose={() => {}} cart={[]} />
    );

    const title = getByText(/Carrinho de compras/i);
    expect(title).toBeInTheDocument();

    const closeButton = getByRole("button", {
      name: /x/i,
    });
    expect(closeButton).toBeInTheDocument();

    const emptyCart = getByText(/Nenhum produto adicionado/i);
    expect(emptyCart).toBeInTheDocument();

    expect(() => getByText(/Total:/i)).toThrow();
    expect(() => getByText("R$10")).toThrow();
    expect(() =>
      getByRole("button", {
        name: /Finalizar compra/i,
      })
    ).toThrow();
  });

  it("should render without errors", () => {
    const { getByText, getByRole, getByTestId } = render(
      <Cart showCart={true} onClose={() => {}} cart={[defaultCart]} />
    );

    const title = getByText(/Carrinho de compras/i);
    expect(title).toBeInTheDocument();

    const closeButton = getByTestId("closeCartButton");
    expect(closeButton).toBeInTheDocument();

    const price = getByTestId("totalPrice");
    expect(price).toBeInTheDocument();

    const purchaseButton = getByRole("button", {
      name: /Finalizar compra/i,
    });
    expect(purchaseButton).toBeInTheDocument();
  });
});
