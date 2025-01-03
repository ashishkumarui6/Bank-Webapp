import React, { useReducer, useState } from "react";
import Page_1 from "../../../components/SignUpCards/Page_1";
import Page_2 from "../../../components/SignUpCards/Page_2";
import Page_3 from "../../../components/SignUpCards/Page_3";
import Page_4 from "../../../components/SignUpCards/Page_4";
import Page_5 from "../../../components/SignUpCards/Page_5";
import styles from "./index.module.css";
import Button from "../../../widgets/Button";
import { Link, useNavigate } from "react-router-dom";
import Page_6 from "../../../components/SignUpCards/Page_6";
import axios from "axios";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, ...action.payload };
    case "GENDER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const navigate = useNavigate();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);

  const [page, setPage] = useState(false);
  const [profile, setProfile] = useState("");

  const [state, dispatch] = useReducer(reducerFunc, {
    name: "",
    email: "",
    phone: "",
    work: "",
    pass: "",
    cpass: "",
    gender: "",
  });

  const OnGetSubmit = (s) => {
    // setPage(!page);
    if (s === "1") {
      setStep1(false);
      setStep2(true);
    } else if (s === "2") {
      setStep2(false);
      setStep3(true);
    } else if (s === "3") {
      setStep3(false);
      setStep4(true);
    } else if (s === "4") {
      setStep4(false);
      setStep5(true);
    } else if (s === "5") {
      setStep5(false);
      setStep6(true);
    } else {
      const config = {
        url: "https://bank-app-652c0-default-rtdb.firebaseio.com/users.json",
        method: "POST",
        data: state,
      };

      axios(config)
        .then((res) => {
          localStorage.setItem("token", "login");
          navigate("/login");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const onGetData = (e) => {
    const key = e.target.id;
    const val = e.target.value;

    const newData = { ...state, [key]: val };

    dispatch({ type: "DATA", payload: newData });
  };

  const onGetGender = (g) => {
    dispatch({ type: "GENDER", payload: { gender: g } });
  };

  const onGetProfile = (e) => {
    setProfile(e.target.value);
  };

  console.log(state);

  const step =
    (step1 && "1") ||
    (step2 && "2") ||
    (step3 && "3") ||
    (step4 && "4") ||
    (step5 && "5") ||
    (step6 && "6");

  return (
    <>
      <div className={styles.form}>
        <div className={styles.container}>
          {step1 && <Page_1 onChange={onGetData} />}
          {step2 && <Page_2 onChange={onGetData} />}
          {step3 && <Page_3 onGetGender={onGetGender} />}
          {step4 && <Page_4 onChange={onGetData} />}
          {step5 && <Page_5 profile={profile} onChange={onGetProfile} />}
          {step6 && <Page_6 onChange={onGetData} />}

          <div className={styles.button}>
            <Button onclick={() => OnGetSubmit(step)} name="continue" />
          </div>
          <div className={styles.login_para}>
            <p>Already Have An Account?</p>
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
