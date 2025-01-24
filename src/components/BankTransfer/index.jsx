import React from "react";
import styles from "./index.module.css";
import AcTitle from "../../shared/AcTitile";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
const BankTransfer = () => {
  const Dispatch = useDispatch();
  return (
    <div className={styles.bankTransfer}>
      <div className={styles.title}>
        <AcTitle color="#000" name="BANK TRANSFER" />
      </div>
      <div className={styles.InputField}>
        <label>Account Number</label>
        <InputField placeholder="Account Number" />
      </div>
      <div className={styles.InputField}>
        <label>Confirm Account Number</label>
        <InputField placeholder="Confirm Account Number" />
      </div>
      <div className={styles.InputField}>
        <label>Account Holder's Name</label>
        <InputField placeholder="Account Holder's Name" />
      </div>
      <div className={styles.InputField}>
        <label>IFSC Code</label>
        <InputField placeholder="IFSC Code (Optional)" />
      </div>
      <div className={styles.btn}>
        <Button
          onclick={() =>
            Dispatch(uiActions.onModalOpen({ name: "onBanktransfer" }))
          }
          name="Proceed To Pay"
        />
      </div>
    </div>
  );
};

export default BankTransfer;
