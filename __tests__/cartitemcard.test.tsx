import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { CartItemCard } from "@/components/CartItemCard";
import { defaultCart } from "@/util";

describe("CartItemCard component", () => {
  it("should render without errors", () => {
    const { getByText, getByAltText, getByRole } = render(
      <CartItemCard {...defaultCart} />
    );

    const productImage = getByAltText(/Imagem do produto Name/i);
    expect(productImage).toBeInTheDocument();

    const title = getByText(/Name/i);
    expect(title).toBeInTheDocument();
    
    const removeProductButton = getByRole("button", {name: /x/i});
    expect(removeProductButton).toBeInTheDocument();
    
    const decreaseQtyButton = getByRole("button", {name: "-"});
    expect(decreaseQtyButton).toBeInTheDocument();
    
    const qty = getByText("1");
    expect(qty).toBeInTheDocument();
    
    const increaseQtyButton = getByRole("button", {name: "+"});
    expect(increaseQtyButton).toBeInTheDocument();

    const price = getByText("R$10");
    expect(price).toBeInTheDocument();
  });

  it("should change product quantity on increase/decrease buttons click", () => {
    const { getByRole, getByTestId } = render(
      <CartItemCard {...defaultCart} />
    );
    const productQty = getByTestId("productQty");

    expect(productQty.textContent).toBe("1");

    const increaseButton = getByRole("button", {
      name: "+",
    });
    fireEvent.click(increaseButton);

    waitFor(() => expect(productQty.textContent).toBe("2"));
    
    const decreaseButton = getByRole("button", {
      name: "-",
    });
    fireEvent.click(decreaseButton);

    waitFor(() => expect(productQty.textContent).toBe("1"));
  });

  it("should delete product on decrease button click when quantity is 1", () => {
    const { getByRole, getByTestId } = render(
      <CartItemCard {...defaultCart} />
    );
    const productQty = getByTestId("productQty");
    const cardItemCard = getByTestId("cartItemCard");

    expect(productQty.textContent).toBe("1");
    expect(cardItemCard).toBeInTheDocument();

    const decreaseButton = getByRole("button", {
      name: "-",
    });
    fireEvent.click(decreaseButton);

    waitFor(() => {
      expect(productQty.textContent).toBeNull()
      expect(cardItemCard).toBeNull()
    });
  });
});
