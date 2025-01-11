import React from "react";
import styles from "./index.module.css";

const PinModal = ({ children }) => {
  return <div className={styles.PinModal}>{children}</div>;
};

export default PinModal;
