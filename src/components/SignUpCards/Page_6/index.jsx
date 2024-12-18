import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import styles from "./index.module.css";

const Page_6 = ({ onChange }) => {
  return (
    <>
      <div className={styles.funds}>
        <div className={styles.fundsTitle}>
          <h2>funds to add</h2>
        </div>
        <div className={styles.fundsInput}>
          <p>₹</p>
          <input type="text" />
        </div>
        <div className={styles.selectUpi_optoins}>
          <h1>Select UPI App</h1>
          <div className={styles.selectUpi_optoin}>
            <div className={styles.optionsicon_cont}>
              <div className={styles.icon}>ion</div>
              <p>Phonepe</p>
            </div>
          </div>
        </div>
        <ul className={styles.circulTab}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className={styles.circulTab_li_active}></li>
        </ul>
      </div>
    </>
  );
};

export default Page_6;
