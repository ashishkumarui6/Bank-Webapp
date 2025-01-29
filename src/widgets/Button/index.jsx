import React from "react";
import styles from "./index.module.css";

const Button = ({ disabled, name, onclick }) => {
  return (
    <button disabled={disabled} onClick={onclick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
