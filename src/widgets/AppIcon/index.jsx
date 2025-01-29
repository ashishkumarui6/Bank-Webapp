import React from "react";
import styles from "./index.module.css";

const AppIcon = ({ img, title, name, onClick, platform }) => {
  return (
    <div
      className={`${styles.appBox} ${
        platform === name.toLowerCase() && styles.active
      }`}
    >
      <div
        onClick={() => onClick(name.toLowerCase())}
        className={styles.appBox_wrap}
      >
        <img src={img} alt={title} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;
