import Head from "next/head";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductList } from "@/components/ProductList";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Store</title>
        <meta name="description" content="Loja online MKS Sistemas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={montserrat.className}>
        <Header />
        <ProductList />
        <Footer />
      </main>
    </>
  );
}
