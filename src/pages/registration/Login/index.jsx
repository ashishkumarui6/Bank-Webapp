import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../shared/Title/intex";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import MyContext from "../../../context/MyContext";

const Login = () => {
  const { copydata } = useContext(MyContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onGetData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  // console.log(copydata);

  const onLogin = () => {
    const isExistinguser = copydata.find(
      (it) => it.email === data.email && it.pass === data.password
    );

    if (isExistinguser) {
      // const { password, ...rest } = isExistinguser;
      localStorage.setItem("user", JSON.stringify(isExistinguser));
      localStorage.setItem("token", "login");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className={styles.loginForm}>
        <div className={styles.loginContainer}>
          <div className={styles.namePhone}>
            <div className={styles.loginTitle}>
              <Title name="Log in" />
            </div>
            <div className={styles.loginInput}>
              <InputField
                type="text"
                onChange={onGetData}
                placeholder="Email"
                id="email"
              />
              <InputField
                type="text"
                onChange={onGetData}
                placeholder="Password"
                id="password"
              />
            </div>
          </div>
          <div className={styles.button}>
            <Button onclick={onLogin} name="Sign In" />
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
