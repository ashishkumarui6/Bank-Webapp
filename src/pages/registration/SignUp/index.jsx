import React, { lazy, useReducer, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui";
import PinModal from "../../../PinModal";
import Message from "../../../components/Message";
import check from "../../../assets/check.png";

import { toast } from "react-toastify";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, ...action.payload };
    case "GENDER":
      return { ...state, ...action.payload };
    case "PAYMETHOD":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const Dispatch = useDispatch();
  const isModalName = useSelector((state) => state.ui.isModalName);
  const navigate = useNavigate();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);

  const [page, setPage] = useState(false);
  const [profile, setProfile] = useState("");

  const onSelectPayMethod = (name) => {
    console.log(name);

    dispatch({ type: "PAYMETHOD", payload: { paymethod: name } });
  };

  const [state, dispatch] = useReducer(reducerFunc, {
    name: "",
    email: "",
    phone: "",
    work: "",
    pass: "",
    cpass: "",
    gender: "",
    paymethod: "phonepe",
    balance: "",
    payee: [
      {
        name: "",
        accountNo: "",
        senderId: "",
      },
    ],
    cardDetails: {
      number: "2363" + Math.floor(Math.random() * 999999999999),
      expiry: Math.floor(Math.random() * 9999),
      cvv: Math.floor(Math.random() * 999),
      type: "Rupay",
    },
    accDetails: {
      customerID: Math.floor(Math.random() * 9999999999),
      upiId: "Yet Not Created",
      branch: "Lucknow",
      accNumber: "8743" + Math.floor(Math.random() * 99999999999),
      ifsc: "AMBK0123456",
      Type: "Savings A/C",
    },
  });

  const OnGetSubmit = (s) => {
    // setPage(!page);
    if (s === "1") {
      if (state.name === "" || state.name.trim().length < 3) {
        toast.error("please enter a valid name and length greater than 3");
      } else if (state.phone.length !== 10) {
        toast.error("Please enter a valid number");
      } else {
        setStep1(false);
        setStep2(true);
      }
    } else if (s === "2") {
      if (state.email === "") {
        toast.error("Please Enter  Email");
      } else if (state.email.includes("@") && !state.email.includes(".")) {
        toast.error("Please Enter Valid Email");
      } else if (state.work === "" || state.work.trim().length < 4) {
        toast.error("Please Enter Valid work");
      } else {
        setStep2(false);
        setStep3(true);
      }
    } else if (s === "3") {
      if (state.gender == "") {
        toast.error("Please select your gender");
      } else {
        setStep3(false);
        setStep4(true);
      }
    } else if (s === "4") {
      if (state.pass === "" || state.pass.trim().length < 6) {
        toast.error("please enter a 6 digits");
      } else if (state.pass === "" || state.cpass.trim().length < 6) {
        toast.error("please enter a canfirm password");
      } else {
        if (state.pass === state.cpass) {
          setStep4(false);
          setStep5(true);
        } else {
          toast.error("confirm password Not match");
        }
      }
    } else if (s === "5") {
      setStep5(false);
      setStep6(true);
    } else {
      if (state.balance === "") {
        toast.error("please add your Funds");
      } else {
        const config = {
          url: "https://bank-webapp-default-rtdb.firebaseio.com/users.json",
          method: "POST",
          data: state,
        };
        axios(config)
          .then((res) => {
            localStorage.setItem("token", "login");
            Dispatch(uiActions.onModalOpen({ name: "AcountcreateSuccess" }));
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
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

  // console.log(state);

  const step =
    (step1 && "1") ||
    (step2 && "2") ||
    (step3 && "3") ||
    (step4 && "4") ||
    (step5 && "5") ||
    (step6 && "6");

  const OngetClose = () => {
    navigate("/login");
  };

  return (
    <>
      {isModalName && (
        <div
          style={{
            background: "#fff",
            zIndex: 100,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        ></div>
      )}
      {isModalName === "AcountcreateSuccess" && (
        <PinModal>
          <Message
            name="Your Account Has Been Successfully Created"
            src={check}
            onclickFun={OngetClose}
            BtnName="Back To Login"
          />
        </PinModal>
      )}
      <div className={styles.form}>
        <div className={styles.container}>
          {step1 && <Page_1 onChange={onGetData} />}
          {step2 && <Page_2 onChange={onGetData} />}
          {step3 && <Page_3 gender={state.gender} onGetGender={onGetGender} />}
          {step4 && <Page_4 onChange={onGetData} />}
          {step5 && <Page_5 profile={profile} onChange={onGetProfile} />}
          {step6 && (
            <Page_6
              app={state.paymethod}
              onChange={onGetData}
              onSelectPayMethod={onSelectPayMethod}
              platform={state.paymethod}
            />
          )}

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
