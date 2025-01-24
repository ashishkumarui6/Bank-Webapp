import React from "react";
import styles from "./index.module.css";
import profile from "../../assets/men.jpg";
import { FaArrowRight } from "react-icons/fa";

const PasswordCardPin = ({ onchange, onClick }) => {
  return (
    <>
      <div>
        <div className={styles.password_userProfile}>
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className={styles.password_text}>
        <p>
          Hello,
          <span>Ashish</span>
        </p>
        <p>Please Enter Your Password</p>
      </div>
      <div className={styles.password_inputArea}>
        <input type="password" onChange={onchange} id="interpass" />
        <div onClick={onClick}>
          <FaArrowRight color="#fff" />
        </div>
      </div>
    </>
  );
};

export default PasswordCardPin;
