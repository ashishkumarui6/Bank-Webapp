import React from "react";
import styles from "./index.module.css";

const SavingAC = () => {
  return (
    <>
      <div>
        <div className={styles.SavingAC_profile}>
          <div className={styles.SavingAC_profile_img}>
            <img src="" alt="" />
          </div>
          <div>
            <p>Welcome back</p>
            <p>Ashish</p>
          </div>
        </div>
        <div className={styles.SavingAC_body}>
          <div className={styles.Saving_saving}>
            <div className={styles.Saving_top}>
              <p>Saving Account</p>
              <p>+</p>
            </div>
            <div className={styles.Saving_mid}>
              <p>
                current balance
                <span> . December</span>
              </p>
            </div>
            <div className={styles.Saving_bot}>
              <h1>.......</h1>
              <div></div>
            </div>
          </div>
          <div className={`${styles.Card_card} ${styles.Card_card2}`}>
            <div className={styles.Card_card_moon}></div>
            <div className={styles.Card_card_top}>
              <h1>Ashish</h1>
            </div>
            <div className={styles.Card_card_mid}>
              <div className={styles.Card_card_mid_chip}>
                <img
                  src="https://ambankservices.netlify.app/static/media/chip.2a380930d6c905bff754.png"
                  alt="img  "
                />
              </div>
              <p className={styles.Card_card_mid_p}>
                Valid: <span>../29</span>
              </p>
            </div>
            <div className={styles.Card_card_bot}>
              <p>0000 0000 0000 5555</p>
            </div>
          </div>
          <div className={styles.Addcard_addcard}>
            <h1 className={styles.Addcard_addcard_h1}> ADD New CARD</h1>
            <p className={styles.Addcard_addcard_h1_p}>+</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingAC;
