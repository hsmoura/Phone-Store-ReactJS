import ColorItem from "./ColorItem";
import classes from "./Selector.module.css";

export default function ColorSelector(props) {
  return (
    <div className={classes.scont}>
      {props.colors &&
        props.colors.map((c) => (
          <ColorItem
            key={c}
            color={c}
            selColor={props.state}
            stateChanger={props.stateChanger}
          />
        ))}
    </div>
  );
}
