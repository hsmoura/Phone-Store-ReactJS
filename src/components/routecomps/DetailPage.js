import Layout from "../layout/Layout";
import ProductView from "../productPage/ProductView";
import AppContext from "../../store/AppContext";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage(props) {
  const ctx = useContext(AppContext);

  const params = useParams();
  const id = params.id;
  const [prodDetails, setProdDetails] = useState({});
  const [fetched, setFetched] = useState(false);
  async function fetchProdDetails() {
    await fetch(`https://front-test-api.herokuapp.com/api/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProdDetails(data);
        setFetched(true);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchProdDetails();
  }, [fetched]);

  return (
    <Layout pname={prodDetails.model}>
      <ProductView id={ctx.selectedPhone} prodDetails={prodDetails} />
    </Layout>
  );
}
