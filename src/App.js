import Home from "./pages/Home";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import "./index.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://657922a4f08799dc8046654e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://657922a4f08799dc8046654e.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://657922a4f08799dc8046654e.mockapi.io/cart", obj);
    setCartItems([...cartItems, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://657922a4f08799dc8046654e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://657922a4f08799dc8046654e.mockapi.io/cart", obj);
    setCartItems([...cartItems, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>

      <Routes>
        <Route path="/favorites" items={favorites} element={<Favorites />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
