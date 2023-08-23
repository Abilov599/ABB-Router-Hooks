import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bgColor, onClick, text } = this.props;
    return (
      <button
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
        className={styles["btn"]}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export { Button };
