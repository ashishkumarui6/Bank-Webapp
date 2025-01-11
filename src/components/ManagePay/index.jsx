import React from "react";
import styles from "./index.module.css";
import InputField from "../../widgets/InputField";

const ManagePay = () => {
  return (
    <div className={styles.content}>
      <div>
        <h1 className={styles.content_title}>Manage Payee</h1>
        <div>
          <InputField />
        </div>
        <div className={styles.payee}>
          <div className={payee_left}></div>
          <div className={payee_right}></div>
        </div>
      </div>
    </div>
  );
};

export default ManagePay;
