import React from "react";
import styles from "./index.module.css";
const AcTitle = ({ name, color }) => {
  return (
    <h1 style={{ color: color }} className={styles.h1}>
      {name}
    </h1>
  );
};

export default AcTitle;
