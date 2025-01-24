import React from "react";
import styles from "./index.module.css";
import chip from "../../assets/chip.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoXbox } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
const CardSetting = () => {
  const Disptch = useDispatch();

  const isModalName = useSelector((state) => state.ui.isModalName);

  return (
    <div className={styles.CardSetting}>
      <div className={styles.CardSetting_card_top}>
        <div className={styles.card_left}>
          <div className={styles.card}>
            <div className={styles.card_top}></div>
            <div className={styles.card_mid_1}>
              <h1>ashish</h1>
            </div>
            <div className={styles.card_mid_2}>
              <div className={styles.card_mid_2_chip}>
                <img src={chip} alt="chipImg" />
              </div>
              <p className={styles.card_mid_2_chip_p}>
                Valid:
                <span className={styles.card_mid_2_chip_span}>../29</span>
              </p>
            </div>
            <div className={styles.card_bottom}>
              <p>●●●● ●●●● ●●●● 0055</p>
            </div>
          </div>
        </div>
        <div className={styles.card_right}>
          <div
            onClick={() =>
              Disptch(uiActions.onModalOpen({ name: "viewCardDetails" }))
            }
            className={styles.settingTab}
          >
            <h1>View Card Details</h1>
            <IoIosArrowForward color="#000" />
          </div>
          <div className={styles.settingTab}>
            <h1>Card Limits</h1>
            <IoIosArrowForward color="#000" />
          </div>
          <div className={styles.settingTab}>
            <h1>Card Locks</h1>
            <IoIosArrowForward color="#000" />
          </div>
          <div
            onClick={() =>
              Disptch(uiActions.onModalOpen({ name: "setAtmPin" }))
            }
            className={styles.settingTab}
          >
            <h1>Set ATM PIN</h1>
            <IoIosArrowForward color="#000" />
          </div>
        </div>
      </div>
      <div>
        <p className={styles.CardSetting_bottom_p}>
          Enjoy With your visa debit card
        </p>
        <div className={styles.bottom_Info}>
          <div>
            <div className={styles.bottom_Info_left}>
              <IoLogoXbox size={35} color="red" />
            </div>
          </div>
          <p>Zero Forex Markup On International Spends</p>
        </div>
        <div className={styles.bottom_Info}>
          <div>
            <div className={styles.bottom_Info_left}>
              <IoSettingsOutline size={35} color="red" />
            </div>
          </div>
          <p>Easy Controls for card settings</p>
        </div>
        <div className={styles.bottom_Info}>
          <div>
            <div className={styles.bottom_Info_left}>
              <IoBriefcaseSharp size={35} color="red" />
            </div>
          </div>
          <p>exciting offers on card transactions</p>
        </div>
        <div className={styles.bottom_Info}>
          <div>
            <div className={styles.bottom_Info_left}>
              <FaCreditCard size={35} color="red" />
            </div>
          </div>
          <p>high transaction success rates</p>
        </div>
      </div>
    </div>
  );
};

export default CardSetting;
