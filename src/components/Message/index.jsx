import React from "react";
import styles from "./index.module.css";
import Button from "../../widgets/Button";

const Message = ({ onclickFun, src, name, BtnName }) => {
  return (
    <div className={styles.SuccessMessage}>
      <div className={styles.checkImg}>
        <img src={src} alt="img" />
      </div>
      <div className={styles.check_para}>
        <h1>{name}</h1>
      </div>
      <div className={styles.button}>
        <Button onclick={onclickFun} name={BtnName} />
      </div>
    </div>
  );
};

export default Message;
