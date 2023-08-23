import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ bgColor, onClick, text }) {
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

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export { Button };
