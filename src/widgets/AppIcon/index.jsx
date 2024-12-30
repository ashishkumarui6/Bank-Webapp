import React from "react";
import styles from "./index.module.css";

const AppIcon = ({ img, title, name }) => {
  return (
    <div className={styles.AppBox}>
      <div className={styles.AppBox_wrap}>
        <img src={img} alt={title} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;
