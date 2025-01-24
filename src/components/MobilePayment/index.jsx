import React from "react";
import styles from "./index.module.css";
import AcTitle from "../../shared/AcTitile";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
const MobilePayment = () => {
  const Dispatch = useDispatch();
  return (
    <div className={styles.mobilePayment}>
      <div className={styles.title}>
        <AcTitle color="#000" name="Mobile Number Payment" />
      </div>
      <div>
        <InputField placeholder="enter mobile number" />
      </div>
      <div>
        <Button
          onclick={() =>
            Dispatch(uiActions.onModalOpen({ name: "onOpenModal" }))
          }
          name="Verify"
        />
      </div>
    </div>
  );
};

export default MobilePayment;
