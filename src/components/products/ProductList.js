import Card from "../ui/Card";
import classes from "./ProductList.module.css";
import Product from "./Product";
import { Fragment, useEffect, useContext } from "react";
import AppContext from "../../store/AppContext";

function ProductList() {
  const ctx = useContext(AppContext);

  useEffect(() => {
    ctx.setDisplayedPhones(
      ctx.products.filter(
        (prod) =>
          prod.brand.toLowerCase().includes(ctx.search.toLowerCase()) ||
          prod.model.toLowerCase().includes(ctx.search.toLowerCase())
      )
    );
    console.log(ctx.displayedPhones);
  }, [ctx.search]);

  return (
    <Fragment>
      <Card>
        <div className={classes.prodList}>
          <div className={classes.listc}>
            {ctx.displayedPhones.map((data) => (
              <Product key={data.id} phone={data} />
            ))}
          </div>
        </div>
      </Card>
    </Fragment>
  );
}

export default ProductList;
