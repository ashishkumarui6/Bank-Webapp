import React from "react";
import styles from "./index.module.css";
import admin from "../../assets/adminlogo.svg";
import Button from "../../widgets/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
const TransactionModal = () => {
  const Dispatch = useDispatch();
  return (
    <div className={styles.TransactionModal}>
      <div className={styles.TransactionModal_top}>
        <div className={styles.top_left}>
          <img src={admin} alt="admin" />
        </div>
        <div className={styles.top_right}>
          <h2>vivek bro</h2>
          <p>123456789</p>
        </div>
      </div>
      <div className={styles.TransactionModal_mid}></div>
      <div className={styles.TransactionModal_bottom}>
        <div className={styles.btn}>
          <Button
            onclick={() =>
              Dispatch(uiActions.onModalOpen({ name: "ProceedMoney" }))
            }
            name="Proceed"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
