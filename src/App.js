import { Routes, Route } from "react-router-dom";
import HomePage from "./components/routecomps/HomePage";
import { useEffect, useState } from "react";
import AppContext from "./store/AppContext";
import DetailPage from "./components/routecomps/DetailPage";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [displayedPhones, setDisplayedPhones] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [cart, setCart] = useState(0);

  async function initProducts() {
    console.log("FETCH");
    await fetch(`https://front-test-api.herokuapp.com/api/product`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedPhones(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    initProducts();
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          products,
          setProducts,
          search,
          setSearch,
          displayedPhones,
          setDisplayedPhones,
          cart,
          setCart,
          savedData,
          setSavedData,
        }}
      >
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/:id" element={<DetailPage />}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
