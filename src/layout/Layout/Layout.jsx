import { useState, useEffect } from "react";
import { Header, Footer } from "..";
import { Home } from "../../pages";

function Layout() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favoritesFromStorage);

    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartFromStorage);
  }, []);

  const setToLocalStorage = (product, itemsName) => {
    const items = JSON.parse(localStorage.getItem(itemsName)) || [];

    const existingIndex = items.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      // Remove the product
      items.splice(existingIndex, 1);
    } else {
      // Add the product
      items.push(product);
    }

    localStorage.setItem(itemsName, JSON.stringify(items));

    if (itemsName === "favorites") {
      setFavorites(items);
    } else if (itemsName === "cart") {
      setCart(items);
    }
  };

  return (
    <>
      <Header favorites={favorites} cart={cart} />
      <Home
        favorites={favorites}
        cart={cart}
        setToLocalStorage={setToLocalStorage}
      />
      <Footer />
    </>
  );
}

export { Layout };
