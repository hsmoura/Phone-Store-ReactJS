import classes from "./ProductView.module.css";
import Actions from "./Actions";

export default function ProductView(props) {
  const DESC_PARAMS = {
    brand: "Brand: ",
    model: "Model: ",
    price: "Price: ",
    cpu: "CPU: ",
    ram: "RAM: ",
    os: "OS: ",
    displaySize: "Sreen Resolution: ",
    battery: "Battery: ",
    primaryCamera: "Primary Camera: ",
    secondaryCmera: "Secondary Camera: ",
    dimentions: "Dimensions: ",
    weight: "Weight: ",
  };

  const getCameraSpecs = (details) => {
    if (details) {
      if (typeof details === "object") {
        return details.join(", ");
      } else {
        return details;
      }
    }
  };

  const desc_items = Object.keys(DESC_PARAMS).map((d) => {
    if (props.prodDetails[d] === "" || props.prodDetails[d] === "-") {
      return null;
    } else if (d === "price" && props.prodDetails[d]) {
      return (
        <p key={d}>
          <span style={{ fontWeight: 700 }}>{DESC_PARAMS[d]}</span>
          {props.prodDetails[d] + "$"}
        </p>
      );
    } else if (d === "price" && props.prodDetails[d]) {
      return <p key={d}>{"Out of stock"}</p>;
    } else if (d === "weight") {
      return (
        <p key={d}>
          <span style={{ fontWeight: 700 }}>{DESC_PARAMS[d]}</span>
          {props.prodDetails[d] + "g"}
        </p>
      );
    } else if (d === "primaryCamera" || d === "secondaryCmera") {
      return (
        <p key={d}>
          <span style={{ fontWeight: 700 }}>{DESC_PARAMS[d]}</span>
          {getCameraSpecs(props.prodDetails[d])}
        </p>
      );
    } else {
      return (
        <p key={d}>
          <span style={{ fontWeight: 700 }}>{DESC_PARAMS[d]}</span>
          {props.prodDetails[d]}
        </p>
      );
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.leftcont}>
        <img src={props.prodDetails.imgUrl} alt="" />
      </div>
      <div className={classes.rightcont}>
        <div className={classes.desc}>
          <h2>Description</h2>
          <ul>{desc_items}</ul>
        </div>
        <div className={classes.actions}>
          {props.prodDetails && <Actions phoneDet={props.prodDetails} />}
        </div>
      </div>
    </div>
  );
}
