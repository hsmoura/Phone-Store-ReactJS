import classes from "./Cart.module.css";

return (
  <div>
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>35.62</span>
    </div>
    <div className={classes.actions}>
      <button className={classes["button--alt"]}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  </div>
);

export default Cart;
