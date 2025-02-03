import React, { useContext, useReducer } from "react";
import styles from "./index.module.css";
import AcTitle from "../../shared/AcTitile";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";
import axios from "axios";
import MyContext from "../../context/MyContext";

const AddNewPayee = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const Dispatch = useDispatch();
  const ctx = useContext(MyContext);

  const ReducerFun = (state, action) => {
    switch (action.type) {
      case "DATA":
        return { ...state, ...action.payload };
    }
  };
  const [state, dispatch] = useReducer(ReducerFun, {
    AcNum: "",
    AcNumC: "",
    AcName: "",
    AcIFSC: "",
  });

  const OnGetSaveDATA = () => {
    const config = {
      url: "https://bank-webapp-default-rtdb.firebaseio.com/addpyee.json",
      method: "POST",
      data: { ...state, userId: user.dId },
    };

    console.log(state);

    axios(config)
      .then((res) => {
        console.log(res);
        ctx.getAddPyaee();
      })
      .catch((error) => {
        console.log(error);
      });

    Dispatch(uiActions.onModalOpen({ name: "addshow" }));
  };

  const ONGETDATA = (e) => {
    const key = e.target.id;
    const val = e.target.value;

    const newData = { ...state, [key]: val };

    dispatch({ type: "DATA", payload: newData });
  };
  return (
    <div className={styles.addnewpayee}>
      <div className={styles.title}>
        <AcTitle color="#000" name="ADD PAYEE" />
      </div>
      <div className={styles.InputField}>
        <label>Account Number</label>
        <InputField
          onChange={ONGETDATA}
          id="AcNum"
          placeholder="Account Number"
        />
      </div>
      <div className={styles.InputField}>
        <label>Confirm Account Number</label>
        <InputField
          onChange={ONGETDATA}
          id="AcNumC"
          placeholder="Confirm Account Number"
        />
      </div>
      <div className={styles.InputField}>
        <label>Account Holder's Name</label>
        <InputField
          onChange={ONGETDATA}
          id="AcName"
          placeholder="Account Holder's Name"
        />
      </div>
      <div className={styles.InputField}>
        <label>IFSC Code</label>
        <InputField
          onChange={ONGETDATA}
          id="AcIFSC"
          placeholder="IFSC Code (Optional)"
        />
      </div>
      <div className={styles.btn}>
        <Button onclick={OnGetSaveDATA} id="AcIFFC" name="ADD" />
      </div>
    </div>
  );
};

export default AddNewPayee;
