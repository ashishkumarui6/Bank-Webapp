import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import styles from "./index.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Page_1 = ({ onChange }) => {
  return (
    <>
      <div className={styles.namePhone}>
        <div className={styles.signInTitle}>
          <Title name="Sign up" />
          <Desciptions name="Require Information To Account Creations" />
        </div>
        <div className={styles.SignInInput}>
          <InputField
            id="name"
            onChange={onChange}
            type="text"
            placeholder="Full Name"
            icon={<FaUser color="#d70026" size={18} />}
          />
          <InputField
            onChange={onChange}
            type="number"
            id="phone"
            placeholder="Phone Number"
            icon={<FaPhone color="#d70026" size={18} />}
          />
        </div>
        <ul className={styles.circulTab}>
          <li className={styles.circulTab_li_active}></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Page_1;
