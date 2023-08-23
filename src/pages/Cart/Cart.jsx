import { useOutletContext } from "react-router-dom";
import { Card } from "../../components";
import styles from "./Cart.module.scss";

const Cart = () => {
  const [favorites, cart, setToLocalStorage] = useOutletContext();
  return (
    <main className={styles.cart}>
      <section>
        <div className="container">
          <div className={styles.row}>
            {!cart.length ? (
              <p className={styles.text}>No items in cart</p>
            ) : (
              cart.map((item) => (
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

export { Cart };
