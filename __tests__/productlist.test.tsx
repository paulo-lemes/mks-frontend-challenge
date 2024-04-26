import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { ProductList } from "@/components/ProductList";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { urlApiRequest } from "@/pages/api";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactElement } from "react";

const mountWithQueryClient = (component: ReactElement) => (
  <QueryClientProvider client={new QueryClient()}>
    {component}
  </QueryClientProvider>
);

describe("ProductList component", () => {
  const worker = setupServer(
    http.get(urlApiRequest, ({ request, params, requestId }) => {
      return HttpResponse.json([
        {
          id: 5,
          name: "Apple Watch Series 7",
          brand: "Apple",
          description:
            "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
          photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
          price: "3200.00",
          createdAt: "2023-10-30T16:25:01.093Z",
          updatedAt: "2023-10-30T16:25:01.093Z",
        },
        { status: 200 },
      ]);
    })
  );

  beforeAll(() => {
    worker.listen();
  });

  beforeEach(() => {
    worker.resetHandlers();
  });

  it("should render fetched product(s) without errors", async () => {
    const { findByText, findByAltText, findByRole } = render(
      mountWithQueryClient(<ProductList />)
    );

    const productImage = findByAltText(
      /Imagem do produto Apple Watch Series 7/i
    );
    waitFor(() => expect(productImage).toBeInTheDocument());

    const title = findByText(/Apple Watch Series 7/i);
    waitFor(() => expect(title).toBeInTheDocument());

    const price = findByText(/3200/i);
    waitFor(() => expect(price).toBeInTheDocument());

    const description = findByText(
      /O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso./i
    );
    waitFor(() => expect(description).toBeInTheDocument());

    const buyButton = findByRole("button");
    waitFor(() => expect(buyButton).toBeInTheDocument());

    const buttonImage = findByAltText(/Ícone de bolsa de compras/i);
    waitFor(() => expect(buttonImage).toBeInTheDocument());
  });

  it("should render ErrorDiv on fetch error", async () => {
    worker.use(
      http.get(urlApiRequest, ({ request, params, requestId }) => {
        return new HttpResponse("Error", { status: 500 });
      })
    );

    const { findByText } = render(mountWithQueryClient(<ProductList />));

    const errorMessage = findByText(/Ocorreu um erro ao buscar produtos/i);
    waitFor(() => expect(errorMessage).toBeInTheDocument());
  });
});
