import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import styles from "./index.module.css";
import { FaLock } from "react-icons/fa";

const Page_4 = ({ onChange, value }) => {
  return (
    <>
      <div className={styles.namePhone}>
        <div className={styles.signInTitle}>
          <Title name="Set Password" />
          <Desciptions name="Require Information To Account Creations" />
        </div>
        <div className={styles.SignInInput}>
          <InputField
            onChange={onChange}
            id="pass"
            type="password"
            placeholder="Password ( > = 6 Digits)"
            icon={<FaLock color="#d70026" size={18} />}
            value={value}
          />
          <InputField
            onChange={onChange}
            id="cpass"
            type="password"
            placeholder="Confirm Password"
            icon={<FaLock color="#d70026" size={18} />}
            value={value}
          />
        </div>
        <ul className={styles.circulTab}>
          <li></li>
          <li></li>
          <li></li>
          <li className={styles.circulTab_li_active}></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Page_4;
