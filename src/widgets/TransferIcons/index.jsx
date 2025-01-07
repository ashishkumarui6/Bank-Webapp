import React from "react";
import styles from "./index.module.css";

const TransferIcons = ({ name, icon, title, onClick }) => {
  return (
    <>
      <div onClick={() => onClick(name)} className={styles.TransferIcon}>
        <div className={styles.icon}>
          <img src={icon} alt={title} />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
    </>
  );
};

export default TransferIcons;
