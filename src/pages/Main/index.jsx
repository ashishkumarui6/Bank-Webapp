import React, { useEffect, useReducer, useState } from "react";
import styles from "./index.module.css";
import Layout from "../../ui/layout";
import AsideMenu from "../../helper/AsideMenu";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Question from "../../components/Question";
import UserDass from "../../components/UserDass";
import Notification from "../../components/Notification";
import reducer, { uiActions } from "../../store/ui";
import AllModal from "../../AllModal";
import AddNewCard from "../../components/AddNewCard";
import ManagePay from "../../components/ManagePay";
import axios from "axios";
import PinModal from "../../PinModal";
import PasswordCardPin from "../../components/PasswordCard";
import SuccessMessage from "../../components/SuccessMessage";
import AllAddcardCompents from "../../components/AllAddcardCompents";

const ReducerFun = (state, action) => {
  switch (action.type) {
    case "ADDNEWDATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
const Main = ({ element }) => {
  const [show, setShow] = useState(false);
  const Dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const matchPass = JSON.parse(localStorage.getItem("user"));

  console.log(matchPass);

  const isModalName = useSelector((state) => state.ui.isModalName);

  if (!token) {
    return <Navigate to="/login" />;
  }
  const toggle = () => {
    setShow(!show);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  const [state, dispatch] = useReducer(ReducerFun, {
    cardNum: "",
    month: "",
    year: "",
    cvv: "",
    cardHolderName: "",
    cardType: "",
    bankCard: "",
  });

  const onGetAddNewDATA = (e) => {
    const key = e.target.id;
    const val = e.target.value;

    const addNewData = { ...state, [key]: val };

    dispatch({ type: "ADDNEWDATA", payload: addNewData });
  };

  const addNewBtnFn = () => {
    const config = {
      url: "https://bank-app-652c0-default-rtdb.firebaseio.com/cards.json",
      method: "POST",
      data: state,
    };

    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    Dispatch(uiActions.onModalOpen({ name: "addnewcard" }));
  };

  const onGetClose = () => {
    Dispatch(uiActions.onModalOpen({ name: "" }));
  };

  const [checkpass, setCheckpass] = useState("");

  const OnGetDataPass = (e) => {
    setCheckpass(e.target.value);
  };

  const OnGetpassAction = () => {
    // console.log(typeof );

    if (matchPass.pass === checkpass) {
      Dispatch(uiActions.onModalOpen({ name: "vivecard" }));
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <>
      {isModalName && (
        <div
          onClick={() => Dispatch(uiActions.onModalOpen({ name: "" }))}
          style={{
            background: "rgba(0,0,0,.5)",
            zIndex: 100,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        ></div>
      )}
      {isModalName === "faq" && <Question />}
      {isModalName === "notification" && <Notification />}
      {isModalName === "profile" && <UserDass />}
      {isModalName === "pinBtn" && (
        <PinModal>
          <PasswordCardPin onClick={OnGetpassAction} onchange={OnGetDataPass} />
        </PinModal>
      )}
      {isModalName === "addnewcard" && (
        <PinModal>
          <SuccessMessage onclickFun={onGetClose} />
        </PinModal>
      )}
      {isModalName === "addBtn" && (
        <AllModal>
          <AddNewCard
            onGetAddNewDATA={onGetAddNewDATA}
            onclickFn={addNewBtnFn}
          />
        </AllModal>
      )}

      {isModalName === "managepay" && (
        <AllModal>
          <ManagePay />
        </AllModal>
      )}

      {isModalName === "vivecard" && (
        <AllModal>
          <AllAddcardCompents />
        </AllModal>
      )}

      {isModalName === "Scan QR" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "Bank Transfer" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "Phone Number" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "UPI ID" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}

      {show && <AsideMenu toggle={toggle} />}
      <Layout toggle={toggle}>
        <div className={styles.Root_root}>{element}</div>
      </Layout>
    </>
  );
};

export default Main;
