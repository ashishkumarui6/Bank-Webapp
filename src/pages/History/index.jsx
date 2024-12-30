import React from "react";
import styles from "./index.module.css";
import searchImg from "../../assets/searchImg.svg";

const History = () => {
  return (
    <div>
      <h1 className={styles.History_history}>Payment History</h1>
      <div className={styles.Search_content}>
        <p className={styles.Search_symbol}>
          <img src={searchImg} alt="" />
        </p>
        <input type="text" placeholder="Search or filter payments" />
      </div>
      <div className={styles.History_history_transtion}></div>
    </div>
  );
};

export default History;
