import React from "react";
import styles from "./index.module.css";
import Button from "../../widgets/Button";
import check from "../../assets/check.png";

const SuccessMessage = ({ onclickFun }) => {
  return (
    <div className={styles.SuccessMessage}>
      <div className={styles.checkImg}>
        <img src={check} alt="cheakImg" />
      </div>
      <div className={styles.check_para}>
        <h1>Your Card Is Successfully Added</h1>
      </div>
      <div className={styles.button}>
        <Button onclick={onclickFun} name="Close" />
      </div>
    </div>
  );
};

export default SuccessMessage;
