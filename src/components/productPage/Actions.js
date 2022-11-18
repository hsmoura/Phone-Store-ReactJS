import classes from "./Actions.module.css";
import ColorSelector from "./ColorSelector";
import StorageSelector from "./StorageSelector";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../store/AppContext";

export default function Actions(props) {
  const [selColor, setSelColor] = useState("");
  const [selStorage, setSelStorage] = useState("");
  const ctx = useContext(AppContext);

  const handleAdd = () => {
    const colorOptions = props.phoneDet.options["colors"];
    const storageOptions = props.phoneDet.options["storages"];
    var colorCode;
    var storageCode;
    if (selColor !== "" && selStorage !== "") {
      for (var key in colorOptions) {
        if (colorOptions[key]["name"] === selColor) {
          colorCode = colorOptions[key]["code"];
        }
      }
      for (var key2 in storageOptions) {
        if (storageOptions[key2]["name"] === selStorage) {
          storageCode = storageOptions[key2]["code"];
        }
      }
      const phoneData = {
        id: props.phoneDet.id,
        colorCode: colorCode,
        storageCode: storageCode,
      };
      postData(phoneData);
    }
  };

  async function postData(phoneData) {
    const response = await fetch(
      "https://front-test-api.herokuapp.com/api/cart",
      {
        method: "POST",
        body: JSON.stringify(phoneData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data["count"]) {
      console.log(data["count"]);
      ctx.setCart((prevState) => {
        return prevState + 1;
      });
      ctx.setSavedData((prevState) => {
        return [...prevState, phoneData];
      });
    }
  }

  useEffect(() => {
    localStorage.setItem("count", ctx.cart);
    localStorage.setItem("cartItems", JSON.stringify(ctx.savedData));
  }, [ctx.cart, ctx.savedData]);

  return (
    <div className={classes.actcont}>
      <ColorSelector
        colors={props.phoneDet.colors}
        state={selColor}
        stateChanger={setSelColor}
      />
      <StorageSelector
        storage={props.phoneDet.internalMemory}
        state={selStorage}
        stateChanger={setSelStorage}
      />
      <button onClick={handleAdd}>Add to cart</button>
    </div>
  );
}
