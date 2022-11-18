import classes from "./Item.module.css";

export default function ColorItem(props) {
  return (
    <div
      className={classes.icont}
      style={{
        border:
          props.selColor === props.color
            ? "3px solid black"
            : "3px solid lightgray",
      }}
      onClick={() => props.stateChanger(props.color)}
    >
      {props.color}
    </div>
  );
}
