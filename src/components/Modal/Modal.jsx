import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

function Modal({ header, text, closeBtn, children, isOpen, onClick }) {
  return isOpen ? (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        {!!closeBtn && (
          <button className={styles["close-button"]} onClick={() => onClick()}>
            X
          </button>
        )}
        <h2>{header}</h2>
        <p>{text}</p>
        <div className={styles["modal-actions"]}>{children}</div>
      </div>
    </div>
  ) : null;
}

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  closeBtn: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Modal };
