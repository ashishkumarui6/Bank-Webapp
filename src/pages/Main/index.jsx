import React, { useEffect, useReducer, useState } from "react";
import styles from "./index.module.css";
import Layout from "../../ui/layout";
import AsideMenu from "../../helper/AsideMenu";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Question from "../../components/Question";
import UserDass from "../../components/UserDass";
import Notification from "../../components/Notification";
import { uiActions } from "../../store/ui";
import AllModal from "../../AllModal";
import AddNewCard from "../../components/AddNewCard";
import ManagePay from "../../components/ManagePay";
import axios from "axios";
import PinModal from "../../PinModal";
import PasswordCardPin from "../../components/PasswordCard";
import AllAddcardCompents from "../../components/AllAddcardCompents";
import ScanQr from "../../components/ScanQr";
import BankTransfer from "../../components/BankTransfer";
import MobilePayment from "../../components/MobilePayment";
import UPIPayment from "../../components/UPIPayment";
import Message from "../../components/Message";
import check from "../../assets/check.png";
import crox from "../../assets/crox.png";
import AddNewPayee from "../../components/AddNewPayee";
import TransactionModal from "../../components/TransactionModal";
import TransactionAddMoneyModal from "../../components/TransactionAddMoneyModal";
import ChangesCard from "../../components/ChangesCard";
import { toast } from "react-toastify";

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
  const user = JSON.parse(localStorage.getItem("user"));

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
    if (
      state.cardNum === "" ||
      state.month === "" ||
      state.year === "" ||
      state.cvv === "" ||
      state.cardHolderName === "" ||
      state.cardType === "" ||
      state.bankCard === ""
    ) {
      toast.error("full fill field");
    } else {
      const config = {
        url: "https://banks-app-5c33f-default-rtdb.firebaseio.com/cards.json",
        method: "POST",
        data: { ...state, userId: user.dId },
      };
      axios(config)
        .then((res) => {
          dispatch({
            type: "ADDNEWDATA",
            payload: {
              cardNum: "",
              month: "",
              year: "",
              cvv: "",
              cardHolderName: "",
              cardType: "",
              bankCard: "",
            },
          });
          console.log(res);
        })
        .catch((err) => console.log(err));
      Dispatch(uiActions.onModalOpen({ name: "addnewcard" }));
    }
  };

  const onMessageShow = () => {
    Dispatch(uiActions.onModalOpen({ name: "" }));
  };

  const [checkpass, setCheckpass] = useState(" ");

  const OnGetDataPass = (e) => {
    setCheckpass(e.target.value);
  };

  const OnGetpassAction = () => {
    if (matchPass.pass === checkpass) {
      Dispatch(uiActions.onModalOpen({ name: "vivecard" }));
      setCheckpass(" ");
    } else {
      Dispatch(uiActions.onModalOpen({ name: "wrongpassword" }));
    }
  };

  const onGetOpenCardDetails = () => {
    if (matchPass.pass === checkpass) {
      Dispatch(uiActions.onModalOpen({ name: "vivecard" }));
      setCheckpass(" ");
    } else {
      Dispatch(uiActions.onModalOpen({ name: "wrongpassword" }));
    }
  };

  const onGetCheack = () => {
    if (matchPass.pass === checkpass) {
      Dispatch(uiActions.onModalOpen({ name: "onSuccess" }));
      setCheckpass(" ");
    } else {
      Dispatch(uiActions.onModalOpen({ name: "wrongpassword" }));
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
          <PasswordCardPin
            onClick={OnGetpassAction}
            onchange={OnGetDataPass}
            value={checkpass}
          />
        </PinModal>
      )}

      {isModalName === "addnewcard" && (
        <PinModal>
          <Message
            name="Your Card Is Successfully Added"
            src={check}
            onclickFun={onMessageShow}
            BtnName="close"
          />
        </PinModal>
      )}

      {isModalName === "wrongpassword" && (
        <PinModal>
          <Message
            name="Please Enter Your Correct Password"
            src={crox}
            onclickFun={onMessageShow}
            BtnName="close"
          />
        </PinModal>
      )}

      {isModalName === "addBtn" && (
        <AllModal>
          <AddNewCard
            state={state}
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
      {isModalName === "AddNewPayee" && (
        <AllModal>
          <AddNewPayee />
        </AllModal>
      )}

      {isModalName === "addshow" && (
        <PinModal>
          <Message
            name="Payee Is Successfully Added"
            src={check}
            onclickFun={onMessageShow}
            BtnName="Back"
          />
        </PinModal>
      )}

      {isModalName === "onOpenModal" && (
        <AllModal>
          <TransactionModal />
        </AllModal>
      )}

      {isModalName === "ProceedMoney" && (
        <AllModal>
          <TransactionAddMoneyModal />
        </AllModal>
      )}

      {isModalName === "onOpenSet" && (
        <PinModal>
          <PasswordCardPin
            onchange={OnGetDataPass}
            value={checkpass}
            onClick={onGetCheack}
          />
        </PinModal>
      )}
      {isModalName === "onSuccess" && (
        <PinModal>
          <Message
            name="Money Send Successfully"
            src={check}
            onclickFun={onMessageShow}
            BtnName="Back"
          />
        </PinModal>
      )}

      {isModalName === "vivecard" && (
        <AllModal>
          <AllAddcardCompents />
        </AllModal>
      )}

      {isModalName === "Scan QR" && (
        <AllModal>
          <ScanQr />
        </AllModal>
      )}
      {isModalName === "Bank Transfer" && (
        <AllModal>
          <BankTransfer />
        </AllModal>
      )}
      {isModalName === "onBanktransfer" && (
        <PinModal>
          <Message
            name="Payee Is Successfully Added"
            src={check}
            onclickFun={onMessageShow}
            BtnName="Back"
          />
        </PinModal>
      )}

      {isModalName === "Phone Number" && (
        <AllModal>
          <MobilePayment />
        </AllModal>
      )}
      {isModalName === "UPI ID" && (
        <AllModal>
          <UPIPayment />
        </AllModal>
      )}

      {isModalName === "viewCardDetails" && (
        <PinModal>
          <PasswordCardPin
            onchange={OnGetDataPass}
            onClick={onGetOpenCardDetails}
            value={checkpass}
          />
        </PinModal>
      )}
      {isModalName === "setAtmPin" && (
        <PinModal>
          <ChangesCard
            placeholder1="Acount Number"
            placeholder2="Set ATM Pin (6 digits)"
            onclick={() =>
              Dispatch(uiActions.onModalOpen({ name: "OnPinSuccess" }))
            }
          />
        </PinModal>
      )}

      {isModalName === "OnPinSuccess" && (
        <PinModal>
          <Message
            name="Atm Pin Is Successfully Generated"
            src={check}
            onclickFun={onMessageShow}
            BtnName="Close"
          />
        </PinModal>
      )}

      {isModalName === "onPassmodal" && (
        <PinModal>
          <Message
            name="Atm Pin Is Successfully Generated"
            src={check}
            onclickFun={onMessageShow}
            BtnName="Close"
          />
        </PinModal>
      )}

      {show && <AsideMenu toggle={toggle} />}
      <Layout toggle={toggle}>
        <div className={styles.Root_root}>{element}</div>
      </Layout>
    </>
  );
};

export default Main;
