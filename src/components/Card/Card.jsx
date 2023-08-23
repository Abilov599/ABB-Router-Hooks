import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import { Modal, Button } from "..";

function Card({
  name,
  price,
  imageURL,
  sku,
  backgroundColor,
  item,
  setToLocalStorage,
  favorites,
  cart,
}) {
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const showHideModal = (modalName) => {
    if (modalName === "showFavoritesModal") {
      setShowFavoritesModal(!showFavoritesModal);
    } else if (modalName === "showCartModal") {
      setShowCartModal(!showCartModal);
    }
  };

  const toggleAdding = (modalName, callback) => {
    showHideModal(modalName);
    callback();
  };

  const checkAddedToFavorites = () => {
    return favorites.some((favItem) => favItem.id === item.id)
      ? "Remove from favorites"
      : "Add to favorites";
  };

  const checkAddedToCart = () => {
    return cart.some((cartItem) => cartItem.id === item.id)
      ? "Remove from cart"
      : "Add to cart";
  };

  return (
    <div className={styles.productCard} style={{ backgroundColor }}>
      <img className={styles.image} src={imageURL} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>Price: ${price.toFixed(2)}</p>
      <p className={styles.sku}>SKU: {sku}</p>
      <div className={styles.buttons}>
        <Modal
          header={"Are you sure?"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
          }
          item={item}
          isOpen={showFavoritesModal}
          closeBtn={true}
          onClick={() => showHideModal("showFavoritesModal")}
          actions={
            <>
              <Button
                bgColor="#4285F4"
                text={checkAddedToFavorites()}
                item={item}
                onClick={() =>
                  toggleAdding("showFavoritesModal", () =>
                    setToLocalStorage(item, "favorites")
                  )
                }
              />
            </>
          }
        />
        <Modal
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
          }
          header={"Are you sure?"}
          content
          closeBtn={true}
          isOpen={showCartModal}
          onClick={() => showHideModal("showCartModal")}
          actions={
            <>
              <Button
                bgColor="#4285F4"
                text={checkAddedToCart()}
                onClick={() =>
                  toggleAdding("showCartModal", () =>
                    setToLocalStorage(item, "cart")
                  )
                }
              />
            </>
          }
        />
        <Button
          text={checkAddedToFavorites()}
          bgColor={"#F9A825"}
          onClick={() => showHideModal("showFavoritesModal")}
        />
        <Button
          text={checkAddedToCart()}
          bgColor={"#4285F4"}
          onClick={() => showHideModal("showCartModal")}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  setToLocalStorage: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
};

export { Card };
