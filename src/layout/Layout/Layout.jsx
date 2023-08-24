import { useState } from "react";
import { Header, Footer } from "..";
import { Outlet } from "react-router-dom";
import {
  getFromLocalStorage,
  setToLocalStorage,
  removeFromLocalStorage,
} from "../../utils/localStorage";

function Layout() {
  const handleRemoveFromCart = (index) => {
    removeFromLocalStorage(index, "cart", setCart);
  };

  const handleAdd = (product, itemsName) => {
    let setter;
    if (itemsName === "cart") {
      setter = setCart;
    } else if (itemsName === "favorites") {
      setter = setFavorites;
    }
    setToLocalStorage(product, itemsName, setter);
  };

  const [favorites, setFavorites] = useState(
    getFromLocalStorage("favorites") || []
  );
  const [cart, setCart] = useState(getFromLocalStorage("cart") || []);

  return (
    <>
      <Header favorites={favorites} cart={cart} />
      <Outlet context={[favorites, cart, handleAdd, handleRemoveFromCart]} />
      <Footer />
    </>
  );
}

export { Layout };
