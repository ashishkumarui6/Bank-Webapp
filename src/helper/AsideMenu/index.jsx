import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.jpg";
import close from "../../assets/closse.svg";
import { asideMenu } from "../../data/Asidemenu";
import { Link } from "react-router-dom";

const AsideMenu = ({ toggle }) => {
  return (
    <>
      <div className={styles.AsideMenu}>
        <div className={styles.AsideMenu_aside}>
          <div className={styles.AsideMenu_top}>
            <div className={styles.container}>
              <div className={styles.topLeft}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.topRight}>
                <img onClick={toggle} src={close} alt="close" />
              </div>
            </div>
          </div>
          <div className={styles.AsideMenu_bot}>
            <div className={styles.bot_item}>
              {asideMenu.map((it, index) => {
                return (
                  <Link key={index} to={it.link}>
                    <div className={styles.bot_items}>
                      <div className={styles.items_icon}>
                        <img src={it.icon} alt={it.title} />
                      </div>
                      <p>{it.content}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideMenu;
