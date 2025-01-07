import React, { useContext } from "react";
import styles from "./index.module.css";
import icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import ImgIcon from "../../assets/ImgIcon.svg";
import Img_add from "../../assets/img_add.svg";
import TransferIcons from "../../widgets/TransferIcons";
import { transferIcons } from "../../data/TransferIcons";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

const Pay = () => {
  const dispatch = useDispatch();
  const OnGetBtnNAme = (name) => {
    dispatch(uiActions.onModalOpen({ name: name }));
  };
  return (
    <>
      <div className={styles.knowInfo}>
        <div className={styles.infoIcon}>
          <img src={icon} alt="icon" />
        </div>
        <p>Know about your upgraded transfer limits</p>
      </div>
      <div
        onClick={() => dispatch(uiActions.onModalOpen({ name: "managepay" }))}
        className={styles.pay_pay}
      >
        <div className={styles.pay_pay_item}>
          <div className={styles.Items_items}>
            <div className={styles.Item_items_img}>
              <img src={ImgIcon} alt="ImgIcon" />
            </div>
            <h1>Manage Payee</h1>
          </div>
        </div>
      </div>
      <div className={styles.recent_recents}>
        <h1 className={styles.Title_title}>Recents</h1>
        <div className={styles.Recents_add}>
          <div className={styles.Recents_add_btn}>
            <div className={styles.Recents_add_img}>
              <img src={Img_add} alt="img_Add" />
            </div>
            <div className={styles.Recents_add_p}>Add New Payee</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title_titles}>Transfer Money</div>
        <div className={styles.transferMoney}>
          {transferIcons.map((it) => {
            return (
              <TransferIcons
                onClick={OnGetBtnNAme}
                key={it.id}
                name={it.name}
                icon={it.icon}
                title={it.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pay;
