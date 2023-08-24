import { useOutletContext } from "react-router-dom";
import { Button, Card } from "../../components";
import styles from "./Cart.module.scss";
import React from "react";

const Cart = () => {
  const [favorites, cart, setToLocalStorage, removeFromLocalStorage] =
    useOutletContext();

  const removeFromCart = (index) => {
    removeFromLocalStorage(index);
  };

  return (
    <main className={styles.cart}>
      <section>
        <div className="container">
          <div className={styles.row}>
            {!cart.length ? (
              <p className={styles.text}>No items in cart</p>
            ) : (
              cart.map((item, i) => {
                const checkAddedToFavorites = () => {
                  return favorites.some((favItem) => favItem.id === item.id)
                    ? "Remove from favorites"
                    : "Add to favorites";
                };
                return (
                  <React.Fragment key={i}>
                    <Card
                      name={item.name}
                      price={item.price}
                      imageURL={item.imageURL}
                      sku={item.sku}
                      backgroundColor={item.backgroundColor}
                    >
                      <>
                        <Button
                          bgColor="#F9A825"
                          text={checkAddedToFavorites()}
                          item={item}
                          onClick={() => setToLocalStorage(item, "favorites")}
                        />
                        <Button
                          text={"Remove from cart"}
                          bgColor={"#4285F4"}
                          onClick={() => removeFromCart(i)} // Remove from cart
                        />
                      </>
                    </Card>
                  </React.Fragment>
                );
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export { Cart };
