import React, { useContext } from "react";
import styles from "./index.module.css";
import AcTitle from "../../shared/AcTitile";
import qr from "../../assets/qrscan.svg";
const ScanQr = () => {
  return (
    <>
      <div className={styles.scanQr}>
        <div className={styles.content}>
          <div>
            <AcTitle color="#000" name="QR Code Scanner" />
          </div>
          <div className={styles.upload_pictur}>
            <div className={styles.imgcont}>
              <img src={qr} alt="qr" />
            </div>
            <p>
              Coming Soon<span>...</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanQr;
