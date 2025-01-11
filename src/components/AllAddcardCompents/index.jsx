import React from "react";
import logo from "../../assets/logo.jpg";
import styles from "./index.module.css";

const AllAddcardCompents = () => {
  return (
    <>
      <div className={styles.modal_contant}>
        <div className={styles.AddCard_logo}>
          <img src={logo} alt="logo" />
        </div>
        <h1>Your AMB Card</h1>
        <div>
          <div className={styles.myDebitCard}>
            <div className={styles.card_front}>
              <div className={styles.debit_fornt_card}></div>
              <div className={styles.debitcard_back}>
                <div className={styles.back_card}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAddcardCompents;
