import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import AppContext from "../../store/AppContext";
import { useContext, useEffect } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      var timeStamp = localStorage.getItem("time");
      var current = new Date().getTime();
      if (timeStamp == null) {
        current = new Date().getTime();
        localStorage.setItem("time", current);
      } else {
        if (current - timeStamp > 3600000) {
          localStorage.clear();
          localStorage.setItem("time", current);
        }
      }
      if (localStorage.getItem("count") && localStorage.getItem("cartItems")) {
        ctx.setCart(Number(localStorage.getItem("count")));
        ctx.setSavedData(JSON.parse(localStorage.getItem("cartItems")));
        console.log("CART ITEMS: " + localStorage.getItem("count"));
      }
    }
  }, []);

  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span className={classes.badge}>{ctx.cart}</span>
    </button>
  );
};

export default HeaderCartButton;
