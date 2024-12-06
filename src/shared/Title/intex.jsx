import React from "react";
import styles from "./index.module.css";

const Title = ({ name }) => {
  return <h1 className={styles.title}>{name}</h1>;
};

export default Title;
