import { useOutletContext } from "react-router-dom";
import { Card } from "../../components";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const [favorites, cart, setToLocalStorage] = useOutletContext();
  return (
    <main className={styles.favorites}>
      <section>
        <div className="container">
          <div className={styles.row}>
            {!cart.length ? (
              <p className={styles.text}>No items in favorites</p>
            ) : (
              favorites.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  name={item.name}
                  price={item.price}
                  imageURL={item.imageURL}
                  sku={item.sku}
                  backgroundColor={item.backgroundColor}
                  favorites={favorites}
                  cart={cart}
                  setToLocalStorage={setToLocalStorage}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export { Favorites };
