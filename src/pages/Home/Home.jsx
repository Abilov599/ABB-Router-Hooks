import React, { Component } from "react";
import { Card } from "../../components";
import styles from "./Home.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          isLoading: false,
        });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;

    const { favorites, cart, setToLocalStorage } = this.props;

    const { products } = data;

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
              {products.map((item) => {
                return (
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
                );
              })}
            </div>
          )}
        </div>
      </main>
    );
  }
}

export { Home };
