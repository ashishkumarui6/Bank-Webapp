import React from "react";
import styles from "./index.module.css";

const Desciptions = ({ name }) => {
  return <p className={styles.desciptions}>{name}</p>;
};

export default Desciptions;
