import React from "react";
import { useOutletContext } from "react-router-dom";
import { Button, Card } from "../../components";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const [favorites, cart, setToLocalStorage] = useOutletContext();
  return (
    <main className={styles.favorites}>
      <section>
        <div className="container">
          <div className={styles.row}>
            {!favorites.length ? (
              <p className={styles.text}>No items in cart</p>
            ) : (
              favorites.map((item, i) => {
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
                          onClick={() => alert("remove")} // Open modal
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

export { Favorites };
