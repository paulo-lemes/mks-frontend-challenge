import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer component", () => {
  it("should render without errors", () => {
    const { getByText } = render(<Footer />);

    const paragraph = getByText(/MKS Sistemas © Todos os direitos reservados/i);
    expect(paragraph).toBeInTheDocument();
  });
});
