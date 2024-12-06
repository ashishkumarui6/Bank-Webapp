import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Page_2 = () => {
  return (
    <>
      <div className={styles.signinForm}>
        <div className={styles.signInContainer}>
          <div className={styles.namePhone}>
            <div className={styles.signInTitle}>
              <Title name="Sign up" />
              <Desciptions name="Require Information To Account Creations" />
            </div>
            <div className={styles.SignInInput}>
              <InputField type="email" placeholder="Email Address" />
              <InputField type="text" placeholder="Work Status" />
            </div>
            <ul className={styles.circulTab}>
              <li></li>
              <li className={styles.circulTab_li_active}></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className={styles.button}>
            <Button name="continue" />
          </div>
          <div className={styles.login_para}>
            <p>Already Have An Account?</p>
            <span>
              <Link>Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_2;
