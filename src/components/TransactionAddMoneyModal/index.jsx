import React from "react";
import styles from "./index.module.css";
import admin from "../../assets/adminlogo.svg";
import Button from "../../widgets/Button";
import { AiOutlineCaretLeft } from "react-icons/ai";
import minilogo from "../../assets/minilogo.jpg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
const TransactionAddMoneyModal = () => {
  const Dispatch = useDispatch();
  return (
    <div className={styles.TransactionModal}>
      <div className={styles.TransactionModal_top}>
        <div className={styles.reverseBtn}>
          <AiOutlineCaretLeft color="#fff" size={28} />
        </div>
        <div className={styles.top_left}>
          <img src={admin} alt="admin" />
        </div>
        <div className={styles.top_right}>
          <h2>vivek bro</h2>
          <p>123456789</p>
        </div>
      </div>
      <div className={styles.TransactionModal_mid}>
        <div>
          <h1 className={styles.title}>Paying</h1>
          <div className={styles.amount_content}>
            <p>₹</p>
            <input
              style={{ width: "50px" }}
              className={styles.amount_input}
              type="text"
            />
          </div>
          <input type="text" placeholder="What is this for" />
        </div>
      </div>
      <div className={styles.TransactionModal_bottom}>
        <div className={styles.bottom_para}>
          <div className={styles.logo}>
            <img src={minilogo} alt="" />
          </div>
          <p>Savings A/c xx7776</p>
        </div>
        <Button
          onclick={() => Dispatch(uiActions.onModalOpen({ name: "onOpenSet" }))}
          name="Pay"
        />
      </div>
    </div>
  );
};

export default TransactionAddMoneyModal;
