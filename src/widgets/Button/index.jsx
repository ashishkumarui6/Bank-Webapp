import React from "react";
import styles from "./index.module.css";

const Button = ({ name, onclick }) => {
  return (
    <button onClick={onclick} className={styles.button}>
      {name}
    </button>
  );
};

export default Button;
