import React from "react";
import styles from "./index.module.css";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
const ChangesCard = ({ placeholder1, placeholder2, onclick }) => {
  return (
    <div className={styles.pin_resetCard}>
      <h1>Set ATM Pin</h1>
      <div>
        <InputField placeholder={placeholder1} />
      </div>
      <div>
        <InputField placeholder={placeholder2} />
      </div>
      <Button onclick={onclick} name="Set" />
    </div>
  );
};

export default ChangesCard;
