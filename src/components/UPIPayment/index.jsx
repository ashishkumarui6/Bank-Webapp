import React from "react";
import styles from "./index.module.css";
import AcTitle from "../../shared/AcTitile";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
const UPIPayment = () => {
  return (
    <div className={styles.upiPayment}>
      <div className={styles.title}>
        <AcTitle color="#000" name="Mobile Number Payment" />
      </div>
      <div>
        <InputField placeholder="enter upi id" />
      </div>
      <div>
        <Button name="Verify" />
      </div>
    </div>
  );
};

export default UPIPayment;
