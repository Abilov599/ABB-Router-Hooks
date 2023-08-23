import React, { Component } from "react";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    );
  }
}

export { Footer };
