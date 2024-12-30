import React from "react";
import styles from "./index.module.css";
import AddMoney_logo from "../../assets/logo.jpg";
import AppIcon from "../../widgets/AppIcon";
import { appbox } from "../../data/Appbox";
import Button from "../../widgets/Button";

const AddMoney = () => {
  return (
    <div>
      <div className={styles.AddMoney_logo}>
        <img src={AddMoney_logo} alt="logo" />
      </div>
      <div className={styles.Title_title}>
        <h2>Add Money To your savings account</h2>
        <p>
          This Lets You use our cool features to pay your friends, discover fun
          ways to save for your goals and much more
        </p>
      </div>
      <div className={styles.Fund_fund}>
        <h4>funds to add</h4>
        <div className={styles.Fund_fund_amount}>
          <p>₹</p>
          <input type="text" />
        </div>
      </div>
      <div className={styles.selectUpi}>
        <h1 className={styles.selectUpi_title}>Select UPI App</h1>
        <div className={styles.selectUpi_wrapper}>
          {appbox.map((it) => (
            <AppIcon key={it.id} name={it.name} img={it.img} title={it.title} />
          ))}
        </div>
      </div>
      <div className={styles.AddMoney_line}></div>
      <div className={styles.AddMoney_neft}>
        <p>add via neft/imps</p>
      </div>
      <div className={styles.AddMoney_powerby_bank}>
        <p>Powered by</p>
        <p>
          Am
          <span>_BANK</span>
        </p>
      </div>
      <div>
        <Button name="Add Funds" />
      </div>
    </div>
  );
};

export default AddMoney;
