import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import styles from "./index.module.css";

const Page_5 = ({ onChange, profile }) => {
  console.log(profile);

  return (
    <>
      <div className={styles.namePhone}>
        <div className={styles.signInTitle}>
          <Title name="Upload Profile" />
          <Desciptions name="Require Information To Account Creations" />
        </div>
        <div className={styles.SignInInput}>
          <div className={styles.uploadProfile_upload}>
            <label htmlFor="files">
              <img
                src={
                  profile
                    ? profile
                    : "https://ambankservices.netlify.app/static/media/person.00e9db07ff4a81ece51142f584acdcd8.svg"
                }
                alt="profile"
              />
            </label>
            <input type="file" id="files" onChange={onChange} />
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
    </>
  );
};

export default Page_5;
