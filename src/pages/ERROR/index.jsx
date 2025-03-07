import React from "react";
import Error from "../../assets/ErrorPage.jpg";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
const ERROR = () => {
  const navigate = useNavigate("");

  const GOTOHOME = () => {
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img src={Error} alt="ERROR" width={"100%"} height={"100%"} />
          <button onClick={GOTOHOME} className={styles.button}>
            GO TO HOME
          </button>
        </div>
      </div>
    </>
  );
};

export default ERROR;
