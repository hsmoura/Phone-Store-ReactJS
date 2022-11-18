import classes from "./Item.module.css";

export default function StorageItem(props) {
  return (
    <div
      className={classes.icont}
      style={{
        border:
          props.selStorage === props.storage
            ? "3px solid black"
            : "3px solid lightgray",
      }}
      onClick={() => props.stateChanger(props.storage)}
    >
      {props.storage}
    </div>
  );
}
