import React from "react";
import { Link } from "react-router-dom";
import Title from "../../../shared/Title/intex";
import Desciptions from "../../../shared/Descriptins";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.loginForm}>
        <div className={styles.loginContainer}>
          <div className={styles.namePhone}>
            <div className={styles.loginTitle}>
              <Title name="Log in" />
            </div>
            <div className={styles.loginInput}>
              <InputField type="text" placeholder="Full Name" />
              <InputField type="text" placeholder="Phone Number" />
            </div>
          </div>
          <div className={styles.button}>
            <Button name="Sign In" />
          </div>
          <h2>Forgot the password?</h2>
          <div className={styles.signin_para}>
            <p>Don't Have An Account?</p>
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
