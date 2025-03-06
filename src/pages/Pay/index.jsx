import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import icon from "../../assets/icon.svg";
import ImgIcon from "../../assets/ImgIcon.svg";
import Img_add from "../../assets/img_add.svg";
import TransferIcons from "../../widgets/TransferIcons";
import { transferIcons } from "../../data/TransferIcons";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";
import Addpayee from "../../assets/adminlogo.svg";
import MyContext from "../../context/MyContext";

const Pay = () => {
  const Dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [addpayee, setAddpayee] = useState([]);
  const { getAddPyaee } = useContext(MyContext);
  const OnGetBtnName = (name) => {
    Dispatch(uiActions.onModalOpen({ name: name }));
  };

  const isModalName = useSelector((state) => state.ui.isModalName);

  const getPayeeData = async () => {
    const data = await getAddPyaee(
      "https://banks-app-5c33f-default-rtdb.firebaseio.com/addpyee.json",
      user.dId
    );

    setAddpayee(data);
  };
  useEffect(() => {
    getPayeeData();
  }, [getPayeeData]);

  return (
    <>
      <div className={styles.knowInfo}>
        <div className={styles.infoIcon}>
          <img src={icon} alt="icon" />
        </div>
        <p>Know about your upgraded transfer limits</p>
      </div>
      <div
        onClick={() => Dispatch(uiActions.onModalOpen({ name: "managepay" }))}
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
        <div className={styles.recent_comntenar}>
          <div className={styles.Recents_add}>
            <div className={styles.Recents_add_btn}>
              <div
                onClick={() =>
                  Dispatch(uiActions.onModalOpen({ name: "AddNewPayee" }))
                }
                className={styles.Recents_add_img}
              >
                <img src={Img_add} alt="img_Add" />
              </div>
              <div className={styles.Recents_add_p}>Add New Payee</div>
            </div>
          </div>
          {addpayee?.map((it, ind) => {
            return (
              <>
                <div
                  key={ind}
                  onClick={() =>
                    Dispatch(uiActions.onModalOpen({ name: "onOpenModal" }))
                  }
                  className={styles.add_payee}
                >
                  <div className={styles.payee_img}>
                    <img src={Addpayee} alt="imgAdd" />
                  </div>
                  <p>{it?.AcName}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.title_titles}>Transfer Money</div>
        <div className={styles.transferMoney}>
          {transferIcons.map((it, ind) => {
            return (
              <>
                <div key={ind}>
                  <TransferIcons
                    onClick={OnGetBtnName}
                    key={it.id}
                    name={it.name}
                    icon={it.icon}
                    title={it.title}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pay;
