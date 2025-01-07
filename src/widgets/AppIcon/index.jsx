import React from "react";
import styles from "./index.module.css";
import { FaCheck } from "react-icons/fa6";

const AppIcon = ({ img, title, name, onClick }) => {
  return (
    <div className={styles.AppBox}>
      <div onClick={() => onClick(name)} className={styles.AppBox_wrap}>
        {/* <span>
          <FaCheck size={14} color="#fff" />
        </span> */}
        <img src={img} alt={title} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default AppIcon;
