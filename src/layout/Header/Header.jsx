import PropTypes from "prop-types";
import styles from "./Header.module.scss";

function Header({ favorites, cart }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.siteName}>Store</h1>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <span>Favorites: {favorites.length}</span>
            </div>
            <div className={styles.icon}>
              <span>Cart: {cart.length}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Header };
