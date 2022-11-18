import classes from "./Product.module.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <div className={classes.product} id="productm">
      <Link
        to={props.phone.id}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className={classes.prodcont}>
          <img src={props.phone.imgUrl} alt="" />
          {!props.phone.price ? (
            <p>
              Model: {props.phone.model}
              <br></br>Brand: {props.phone.brand}
              <br></br>Out of stock
            </p>
          ) : (
            <p>
              Model: {props.phone.model}
              <br></br>Brand: {props.phone.brand}
              <br></br>Price: {props.phone.price}$
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
