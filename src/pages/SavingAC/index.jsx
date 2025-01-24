import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import axios from "axios";
import { data, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import chip from "../../assets/chip.png";

const SavingAC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(true);
  const isModalName = useSelector((state) => state.ui.isModalName);

  const getUserCopy = () => {
    axios
      .get("https://bank-app-652c0-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        const newAddData = [];

        for (const id in res.data) {
          newAddData.push({ ...res.data[id], dId: id });
        }
        setUser(newAddData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserCopy();
  }, []);

  // console.log(isModalName);
  console.log(user);

  // const { name, email } = user;

  const OnGetShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div className={styles.SavingAC_profile}>
          <div className={styles.SavingAC_profile_img}>
            <img src="" alt="profile" />
          </div>
          <div>
            <p>Welcome back</p>
            <p>{user[0]?.name}</p>
          </div>
        </div>
        <div className={styles.SavingAC_body}>
          <div className={styles.Saving_saving}>
            <div className={styles.Saving_top}>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                Saving Account
              </p>
              <Link to="/addmoney">
                <p>+</p>
              </Link>
            </div>
            <div className={styles.Saving_mid}>
              <p style={{ fontSize: "16px", fontWeight: "400" }}>
                current balance
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  . December
                </span>
              </p>
            </div>
            <div className={styles.Saving_bot}>
              <div className={styles.banlance}>
                <div>
                  {show ? (
                    <p
                      style={{
                        fontSize: "28px",
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      ●●●●●●
                    </p>
                  ) : (
                    <p
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "#000",
                      }}
                    >
                      ₹ 10
                    </p>
                  )}
                </div>
                <div onClick={OnGetShow} className={styles.show_icon}>
                  {show ? (
                    <div className={styles.icon}>
                      <IoMdEyeOff size={28} color="#000" />
                    </div>
                  ) : (
                    <div className={styles.icon}>
                      <IoEye size={28} color="#000" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => dispatch(uiActions.onModalOpen({ name: "pinBtn" }))}
            className={`${styles.Card_card} ${styles.Card_card2}`}
          >
            <div className={styles.Card_card_moon}></div>
            <div className={styles.Card_card_top}>
              <h1>Ashish</h1>
            </div>
            <div className={styles.Card_card_mid}>
              <div className={styles.Card_card_mid_chip}>
                <img src={chip} alt="img" />
              </div>
              <p className={styles.Card_card_mid_p}>
                Valid: <span>../29</span>
              </p>
            </div>
            <div className={styles.Card_card_bot}>
              <p>●●●● ●●●● ●●●● 5555</p>
            </div>
          </div>
          <div className={styles.Addcard_addcard}>
            <h1 className={styles.Addcard_addcard_h1}>ADD New CARD</h1>
            <p
              onClick={() =>
                dispatch(uiActions.onModalOpen({ name: "addBtn" }))
              }
              className={styles.Addcard_addcard_h1_p}
            >
              +
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingAC;
