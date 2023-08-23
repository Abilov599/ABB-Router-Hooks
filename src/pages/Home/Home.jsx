import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.scss";
import { Card } from "../../components";

function Home({ favorites, cart, setToLocalStorage }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main className={styles.home}>
      <div className="container">
        {isLoading ? (
          <p className={styles.text}>Loading...</p>
        ) : (
          <div className={styles.row}>
            {data.map((item) => (
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

Home.propTypes = {
  favorites: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setToLocalStorage: PropTypes.func.isRequired,
};

export { Home };
