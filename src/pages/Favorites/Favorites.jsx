import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Button, Card, Modal } from "../../components";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const [favorites, cart, setToLocalStorage] = useOutletContext();
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setShowModal((prevShowModal) => !prevShowModal);
    setSelectedItem(item);
  };

  const addToCartAndCloseModal = (item) => {
    setToLocalStorage(item, "cart");
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <main className={styles.favorites}>
      <section>
        <div className="container">
          <div className={styles.row}>
            {!favorites.length ? (
              <p className={styles.text}>No items in favorites</p>
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
                          text={"Add to cart"}
                          bgColor={"#4285F4"}
                          onClick={() => toggleModal(item)} // Open modal
                        />
                      </>
                    </Card>
                    <Modal
                      text={`This item will be added to your cart`}
                      header={"Are you sure?"}
                      closeBtn={true}
                      isOpen={showModal} // Pass the modal visibility as prop
                      onClick={() => toggleModal(null)} // Close modal
                    >
                      <Button
                        bgColor="#4285F4"
                        text={"Add to cart"}
                        onClick={() => {
                          addToCartAndCloseModal(selectedItem, "cart");
                        }}
                      />
                    </Modal>
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
