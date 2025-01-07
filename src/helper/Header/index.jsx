import React, { useState } from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.jpg";
import { IoIosMenu } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import profile from "../../assets/ashish-me.jpg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

const Header = ({ toggle }) => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.menu}>
            <IoIosMenu onClick={toggle} color="#000" size={35} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.icon}>
            <div
              onClick={() => dispatch(uiActions.onModalOpen({ name: "faq" }))}
              className={styles.icon_left}
            >
              <AiFillQuestionCircle color="#000" size={26} />
            </div>
            <div
              onClick={() =>
                dispatch(uiActions.onModalOpen({ name: "notification" }))
              }
              className={styles.icon_right}
            >
              <BsFillBellFill color="#000" size={26} />
            </div>
          </div>
          <div
            onClick={() => dispatch(uiActions.onModalOpen({ name: "profile" }))}
            className={styles.profile}
          >
            <div className={styles.profile_img}>
              <div className={styles.imageUrl}>
                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
