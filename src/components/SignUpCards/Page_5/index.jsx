import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Page_5 = () => {
  return (
    <>
      <div className={styles.signinForm}>
        <div className={styles.signInContainer}>
          <div className={styles.namePhone}>
            <div className={styles.signInTitle}>
              <Title name="Upload Profile" />
              <Desciptions name="Require Information To Account Creations" />
            </div>
            <div className={styles.SignInInput}>
              <div className={styles.uploadProfile_upload}>
                <label htmlFor="files">
                  <img
                    src="https://ambankservices.netlify.app/static/media/person.00e9db07ff4a81ece51142f584acdcd8.svg"
                    alt="profile"
                  />
                </label>
                <input type="file" id="files" />
              </div>
            </div>
            <ul className={styles.circulTab}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li className={styles.circulTab_li_active}></li>
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

export default Page_5;
