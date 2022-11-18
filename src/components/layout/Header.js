import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Phone Store</Link>
        {props.pname && (
          <div className={classes.breadcrumb}>
            {">"}
            {props.pname}
          </div>
        )}
      </div>
      <HeaderCartButton />
    </header>
  );
}

export default Header;
