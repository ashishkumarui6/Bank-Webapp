import React from "react";
import styles from "./index.module.css";
import { FaCheck } from "react-icons/fa6";

const AppIcon = ({ img, title, name, onClick, app }) => {
  return (
    <div className={`${styles.appBox} ${app === name && styles.appBox_actve}`}>
      <div onClick={() => onClick(name)} className={styles.appBox_wrap}>
        {/* <span>{app && <FaCheck size={14} color="#fff" />}</span> */}
        <img src={img} alt={title} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;
