import React from "react";
import styles from "./index.module.css";
import InputField from "../../widgets/InputField";
import adminlogo from "../../assets/adminlogo.svg";

const ManagePay = () => {
  return (
    <div className={styles.content}>
      <div>
        <h1 className={styles.content_title}>Manage Payee</h1>
        <div>
          <InputField />
        </div>
        <div className={styles.payee}>
          <div className={styles.payee_left}>
            <div className={styles.left_img}>
              <img src={adminlogo} alt="adminlogo" />
            </div>
            <div className={styles.left_content}>
              <h2>Ashish Kumar</h2>
              <p>xxxxxxxx3049</p>
            </div>
          </div>
          <div className={styles.payee_right}>
            <h1>Edit Delete</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePay;
