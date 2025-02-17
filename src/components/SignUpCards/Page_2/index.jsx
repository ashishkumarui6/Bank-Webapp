import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import styles from "./index.module.css";
import { MdEmail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

const Page_2 = ({ onChange, state }) => {
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
            value={state.email}
            placeholder="Email Address"
            icon={<MdEmail color="#d70026" size={20} />}
          />
          <InputField
            onChange={onChange}
            type="text"
            value={state.work}
            id="work"
            placeholder="Work Status"
            icon={<BsBriefcaseFill color="#d70026" size={20} />}
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
