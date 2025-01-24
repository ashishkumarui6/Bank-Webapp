import React from "react";
import styles from "./index.module.css";
import chip from "../../assets/chip.png";
const AddNewATMCard = ({ mm, yy, cardNum, cardName, cvv }) => {
  return (
    <>
      <div className={styles.debitcard}>
        <div className={styles.debitCard_front}>
          <div className={styles.frontCard}>
            <div className={styles.frontCard_moon}></div>
            <div className={styles.frontCard_top}>
              <h1>VISA</h1>
              <div className={styles.imgCont}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.frontCard_mid}>
              <div className={styles.mid_chip}>
                <img src={chip} alt="chip" />
              </div>
              <p>
                Valid:
                <span>
                  {mm} , {yy}
                </span>
              </p>
            </div>
            <div className={styles.frontCard_bottom}>
              <p>{cardNum}</p>
              <p>{cardName}</p>
            </div>
          </div>
          <div className={styles.debitCard_back}>
            <div className={styles.back_card}>
              <div></div>
              <div className={styles.back_bottom}>
                <p>CVV</p>
                <p>{cvv}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewATMCard;
