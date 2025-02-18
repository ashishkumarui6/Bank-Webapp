import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../../shared/Title/intex";
import InputField from "../../../widgets/InputField";
import Button from "../../../widgets/Button";
import styles from "./index.module.css";
import MyContext from "../../../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui";
import PinModal from "../../../PinModal";
import Message from "../../../components/Message";
import crox from "../../../assets/crox.png";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";

const Login = () => {
  const Dispatch = useDispatch();
  const isModalName = useSelector((state) => state.ui.isModalName);

  const { copydata } = useContext(MyContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onGetData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

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
      setData({
        email: "",
        password: "",
      });
      Dispatch(uiActions.onModalOpen({ name: "alertCredentials" }));
    }
  };

  const OngetClose = () => {
    Dispatch(uiActions.onModalOpen({ name: "" }));
  };

  return (
    <>
      {isModalName === "alertCredentials" && (
        <PinModal>
          <Message
            name="Given credentials Is Incorrect!"
            src={crox}
            onclickFun={OngetClose}
            BtnName="close"
          />
        </PinModal>
      )}
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
                value={data.email}
                icon={<MdOutlineAttachEmail color="#000" size={18} />}
              />
              <InputField
                type="text"
                onChange={onGetData}
                placeholder="Password"
                id="password"
                value={data.password}
                icon={<TbPasswordFingerprint color="#000" size={18} />}
              />
            </div>
          </div>
          <div className={styles.button}>
            <Button
              disabled={data.email.length == 0 || data.password.length !== 6}
              onclick={onLogin}
              name="Sign In"
            />
          </div>
          <p
            onClick={() =>
              Dispatch(uiActions.onModalOpen({ name: "onPassmodal" }))
            }
          >
            Forgot the password?
          </p>

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
