import React from "react";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Page_3 = ({ onGetGender }) => {
  return (
    <>
      <div className={styles.namePhone}>
        <div className={styles.signInTitle}>
          <Title name="Select Gender" />
          <Desciptions name="Require Information To Account Creations" />
        </div>
        <div className={styles.SignInInput_genderInput}>
          <div onClick={() => onGetGender("male")} className={styles.options}>
            <img
              src="	https://ambankservices.netlify.app/static/media/male.522f692d70843ba4f57c1295b441eb4e.svg"
              alt="male"
            />
          </div>
          <div onClick={() => onGetGender("female")} className={styles.options}>
            <img
              src="https://ambankservices.netlify.app/static/media/female.831e8f30a925911149e8000f560db81b.svg"
              alt="female"
            />
          </div>
        </div>
        <ul className={styles.circulTab}>
          <li></li>
          <li></li>
          <li className={styles.circulTab_li_active}></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Page_3;
