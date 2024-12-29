import React from "react";
import styles from "./index.module.css";
const AllModal = ({ children }) => {
  return (
    <>
      <div className={styles.AllModal}>
        <div className={styles.AllModal_dropback}>
          <div className={styles.AllModal_dropback_right_box}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default AllModal;
