import React, { useContext } from "react";
import logo from "../../assets/logo.jpg";
import cardlogo from "../../assets/cardlogo.png";
import styles from "./index.module.css";
import chip from "../../assets/chip.png";
import AddNewATMCard from "../AddNewATMCard";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";

const AllAddcardCompents = () => {
  const { addCard, loading, copydata } = useContext(MyContext);

  console.log(copydata);
  return (
    <>
      <div className={styles.modal_contant}>
        <div className={styles.AddCard_logo}>
          <img src={logo} alt="logo" />
        </div>
        <h1>Your AMB Card</h1>
        <div>
          {copydata.map((it) => {
            return (
              <>
                <div className={styles.debitcard}>
                  <div className={styles.debitCard_front}>
                    <div className={styles.frontCard}>
                      <div className={styles.frontCard_moon}></div>
                      <div className={styles.frontCard_top}>
                        <h1>{it.cardDetails.type}</h1>
                        <div className={styles.imgCont}>
                          <img src={cardlogo} alt="" />
                        </div>
                      </div>
                      <div className={styles.frontCard_mid}>
                        <div className={styles.mid_chip}>
                          <img src={chip} alt="chip" />
                        </div>
                        <p>
                          Valid:
                          <span>{it.cardDetails.expiry}</span>
                        </p>
                      </div>
                      <div className={styles.frontCard_bottom}>
                        <p>{it.cardDetails.number}</p>
                        <p>{it.name}</p>
                      </div>
                    </div>
                    <div className={styles.debitCard_back}>
                      <div className={styles.back_card}>
                        <div></div>
                        <div className={styles.back_bottom}>
                          <p>CVV</p>
                          <p>{it.cardDetails.cvv}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {copydata.map((it) => {
          return (
            <>
              <div>
                <div className={styles.into_Info}>
                  <h1>Cardholder Name :</h1>
                  <p>{it.name}</p>
                </div>
                <div className={styles.into_Info}>
                  <h1>Validity :</h1>
                  <p>{it.cardDetails.expiry}</p>
                </div>
                <div className={styles.into_Info}>
                  <h1>Card Number :</h1>
                  <p>{it.cardDetails.number}</p>
                </div>
                <div className={styles.into_Info}>
                  <h1>CVV :</h1>
                  <p>{it.cardDetails.cvv}</p>
                </div>
              </div>
            </>
          );
        })}
        {loading && <Loader />}
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
