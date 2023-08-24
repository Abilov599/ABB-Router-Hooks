import { useState } from "react";
import { Header, Footer } from "..";
import { Outlet } from "react-router-dom";

function Layout() {
  const [favorites, setFavorites] = useState(
    getFromLocalStorage("favorites") || []
  );
  const [cart, setCart] = useState(getFromLocalStorage("cart") || []);

  function getFromLocalStorage(itemsName) {
    const items = JSON.parse(localStorage.getItem(itemsName)) ?? [];
    return items;
  }

  function setToLocalStorage(product, itemsName) {
    const items = getFromLocalStorage(itemsName);

    const existingIndex = items.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1 && itemsName === "favorites") {
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
  }

  return (
    <>
      <Header favorites={favorites} cart={cart} />
      <Outlet context={[favorites, cart, setToLocalStorage]} />
      <Footer />
    </>
  );
}

export { Layout };
