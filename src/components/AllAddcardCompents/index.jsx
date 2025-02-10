import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import cardlogo from "../../assets/cardlogo.png";
import styles from "./index.module.css";
import chip from "../../assets/chip.png";
import AddNewATMCard from "../AddNewATMCard";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";

const AllAddcardCompents = () => {
  const [card, setCard] = useState([]);
  const { loading, getAddCard } = useContext(MyContext);

  const [user, setUser] = useState([]);

  useEffect(() => {
    const uData = JSON.parse(localStorage.getItem("user") || []);

    if (uData) {
      setUser(uData);
    }
  }, []);

  const getCardData = async () => {
    const data = await getAddCard(
      "https://bank-webapp-default-rtdb.firebaseio.com/cards.json",
      user.dId
    );

    setCard(data);
  };
  useEffect(() => {
    getCardData();
  }, [getCardData]);

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
                  <h1>{user?.cardDetails?.type}</h1>
                  <div className={styles.imgCont}>
                    <img src={cardlogo} alt="logo" />
                  </div>
                </div>
                <div className={styles.frontCard_mid}>
                  <div className={styles.mid_chip}>
                    <img src={chip} alt="chip" />
                  </div>
                  <p>
                    Valid:
                    <span>{user?.cardDetails?.expiry}</span>
                  </p>
                </div>
                <div className={styles.frontCard_bottom}>
                  <p>{user?.cardDetails?.number}</p>
                  <p>{user?.name}</p>
                </div>
              </div>
              <div className={styles.debitCard_back}>
                <div className={styles.back_card}>
                  <div></div>
                  <div className={styles.back_bottom}>
                    <p>CVV</p>
                    <p>{user?.cardDetails?.cvv}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.into_Info}>
            <h1>Cardholder Name :</h1>
            <p>{user?.name}</p>
          </div>
          <div className={styles.into_Info}>
            <h1>Validity :</h1>
            <p>{user?.cardDetails?.expiry}</p>
          </div>
          <div className={styles.into_Info}>
            <h1>Card Number :</h1>
            <p>{user?.cardDetails?.number}</p>
          </div>
          <div className={styles.into_Info}>
            <h1>CVV :</h1>
            <p>{user?.cardDetails?.cvv}</p>
          </div>
        </div>

        {loading && <Loader />}
        {/* add new card  */}
        {card?.map((it, ind) => {
          return (
            <>
              <div key={ind}>
                <AddNewATMCard
                  mm={it.month}
                  yy={it.year}
                  cardNum={it.cardNum}
                  cardName={it.cardholderName}
                  cvv={it.cvv}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AllAddcardCompents;
