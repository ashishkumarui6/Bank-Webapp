import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Page_2 = ({ onChange }) => {
  return (
    <>
      <div className={styles.namePhone}>
        <div className={styles.signInTitle}>
          <Title name="Sign up" />
          <Desciptions name="Require Information To Account Creations" />
        </div>
        <div className={styles.SignInInput}>
          <InputField
            onChange={onChange}
            type="email"
            id="email"
            placeholder="Email Address"
          />
          <InputField
            onChange={onChange}
            type="text"
            id="work"
            placeholder="Work Status"
          />
        </div>
        <ul className={styles.circulTab}>
          <li></li>
          <li className={styles.circulTab_li_active}></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Page_2;
