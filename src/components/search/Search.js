import classes from "./Search.module.css";
import { useRef, useContext } from "react";
import AppContext from "../../store/AppContext";

export default function Search() {
  const formRef = useRef();
  const ctx = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (event) => {
    ctx.setSearch(event.target.value);
  };

  return (
    <div className={classes.searchcontainer}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          style={{ backgroundColor: "#FFF" }}
          type="text"
          placeholder="Search"
          name="search_term"
          value={ctx.search}
          onChange={handleSearchChange}
        />
        {/*<button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
            alt=""
          />
        </button>*/}
      </form>
    </div>
  );
}
