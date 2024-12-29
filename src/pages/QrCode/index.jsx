import React from "react";
import styles from "./index.module.css";
import Button from "../../widgets/Button";

const QrCode = () => {
  return (
    <>
      <div className={styles.qrCode_top}>
        <div className={styles.qrCode_left}>
          <h1>ashish</h1>
          <div className={styles.AcNo}>
            <p>Acc No:</p>
            <p>202357222118</p>
          </div>
          <div className={styles.AcIfccNo}>
            <p>IFSC:</p>
            <p>AMBK1234567</p>
          </div>
        </div>
        <div className={styles.qrCode_right}>
          <img
            src="https://ambankservices.netlify.app/static/media/qrcode.37390060ee41a117445497c580ce6e3a.svg"
            alt="qrcode"
          />
        </div>
      </div>
      <p className={styles.qrCode_mid_para}>
        we recommend using NEFT/IMPS bank transfer for amounts above ₹2000
      </p>
      <div className={styles.qrCode_btn}>
        <Button name="Share" />
        <Button name="Save QR Code" />
      </div>
    </>
  );
};

export default QrCode;
