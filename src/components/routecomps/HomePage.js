import Layout from "../layout/Layout";
import ProductList from "..//products/ProductList";
import Search from "../search/Search";

export default function HomePage() {
  return (
    <Layout>
      <Search />
      <ProductList />
    </Layout>
  );
}
