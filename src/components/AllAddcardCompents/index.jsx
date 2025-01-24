import React, { useContext } from "react";
import logo from "../../assets/logo.jpg";
import styles from "./index.module.css";
import chip from "../../assets/chip.png";
import AddNewATMCard from "../AddNewATMCard";
import MyContext from "../../context/MyContext";

const AllAddcardCompents = () => {
  const { addCard } = useContext(MyContext);

  console.log(addCard);
  return (
    <>
      <div className={styles.modal_contant}>
        <div className={styles.AddCard_logo}>
          <img src={logo} alt="logo" />
        </div>
        <h1>Your AMB Card</h1>
        <div>
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
                    <span>07/29</span>
                  </p>
                </div>
                <div className={styles.frontCard_bottom}>
                  <p>4577046005172323</p>
                  <p>Ashih Kumar</p>
                </div>
              </div>
              <div className={styles.debitCard_back}>
                <div className={styles.back_card}>
                  <div></div>
                  <div className={styles.back_bottom}>
                    <p>CVV</p>
                    <p>388</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.into_Info}>
            <h1>Cardholder Name :</h1>
            <p>ashish</p>
          </div>
          <div className={styles.into_Info}>
            <h1>Validity :</h1>
            <p>07/29</p>
          </div>
          <div className={styles.into_Info}>
            <h1>Card Number :</h1>
            <p>5185598594310055</p>
          </div>
          <div className={styles.into_Info}>
            <h1>CVV :</h1>
            <p>388</p>
          </div>
        </div>
        {/* add new card  */}
        {addCard?.map((it, index) => {
          return (
            <>
              <AddNewATMCard
                mm={it.month}
                yy={it.year}
                cardNum={it.cardNum}
                cardName={it.cardholderName}
                cvv={it.cvv}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllAddcardCompents;
