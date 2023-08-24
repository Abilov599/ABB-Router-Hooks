import PropTypes from "prop-types";
import styles from "./Card.module.scss";

function Card({ name, price, imageURL, sku, backgroundColor, children }) {
  return (
    <div className={styles.productCard} style={{ backgroundColor }}>
      <img className={styles.image} src={imageURL} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>Price: ${price.toFixed(2)}</p>
      <p className={styles.sku}>SKU: {sku}</p>
      <div className={styles.buttons}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export { Card };
