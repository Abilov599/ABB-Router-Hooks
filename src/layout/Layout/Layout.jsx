import React, { Component } from "react";
import { Header, Footer } from "..";
import { Home } from "../../pages";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: this.getFromLocalStorage("favorites"),
      cart: this.getFromLocalStorage("cart"),
    };
  }

  getFromLocalStorage = (itemsName) => {
    const items = JSON.parse(localStorage.getItem(itemsName)) ?? [];
    return items;
  };

  setToLocalStorage = (product, itemsName) => {
    const items = this.getFromLocalStorage(itemsName);

    const existingIndex = items.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      // Remove the product
      items.splice(existingIndex, 1);
    } else {
      // Add the product
      items.push(product);
    }

    localStorage.setItem(itemsName, JSON.stringify(items));

    // Update the state after modifying local storage
    if (itemsName === "favorites") {
      this.setState({ favorites: items });
    } else if (itemsName === "cart") {
      this.setState({ cart: items });
    }
  };

  render() {
    const { favorites, cart } = this.state;
    return (
      <>
        <Header favorites={favorites} cart={cart} />
        <Home
          favorites={favorites}
          cart={cart}
          setToLocalStorage={this.setToLocalStorage}
        />
        <Footer />
      </>
    );
  }
}

export { Layout };
