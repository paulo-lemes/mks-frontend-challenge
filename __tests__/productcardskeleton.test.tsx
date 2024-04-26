import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";

describe("ProductCardSkeleton component", () => {
  it("should render without erros", () => {
    const { getByTestId } = render(<ProductCardSkeleton />);

    const productCardSkeleton = getByTestId("productCardSkeleton");

    expect(productCardSkeleton).toBeInTheDocument();
  });
});
