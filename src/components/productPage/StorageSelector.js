import classes from "./Selector.module.css";
import StorageItem from "./StorageItem";

export default function StorageSelector(props) {
  return (
    <div className={classes.scont}>
      {props.storage &&
        props.storage.map((s) => (
          <StorageItem
            key={s}
            storage={s}
            selStorage={props.state}
            stateChanger={props.stateChanger}
          />
        ))}
    </div>
  );
}
