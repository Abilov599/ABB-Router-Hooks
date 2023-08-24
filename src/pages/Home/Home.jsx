import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useOutletContext } from "react-router-dom";
import { Button, Card, Modal } from "../../components";
import styles from "./Home.module.scss";

function Home() {
  const { data, loading, error } = useFetch("../../data.json");
  const { products } = data;
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

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main className={styles.home}>
      <div className="container">
        {loading ? (
          <p className={styles.text}>Loading...</p>
        ) : (
          <div className={styles.row}>
            {products.map((item) => {
              const checkAddedToFavorites = () => {
                return favorites.some((favItem) => favItem.id === item.id)
                  ? "Remove from favorites"
                  : "Add to favorites";
              };
              return (
                <React.Fragment key={item.id}>
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
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export { Home };
