import React from "react";
import styles from "./index.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";

const noti = [
  {
    id: 1,
    icon: <FaCircleCheck color="red" />,
    nametop: "just Nosdfsdfdfjsdnvjsdnfj",
    namebot: "just Now",
  },
  {
    id: 2,
    icon: <FaKey color="red" />,
    nametop: "sdflakdjfkwdwenlfknF",
    namebot: "1 Hour",
  },
  {
    id: 3,
    icon: <FaBullhorn color="red" />,
    nametop: "asdfghjkl;kksdfafdasfsafas",
    namebot: "1 Hour",
  },
];
const Notification = () => {
  return (
    <div className={styles.notification}>
      <ul className={styles.notification_ul}>
        <li className={styles.notification_ul_top}>
          <p className={styles.notification_ul_top_para}>Notification</p>
        </li>
        {noti.map((it, ind) => {
          return (
            <li>
              <div key={ind}>
                <div className={styles.notification_item}>
                  <div className={styles.notification_left}>{it.icon}</div>
                  <div className={styles.notification_right}>
                    <p>{it.nametop}</p>
                    <span>{it.namebot}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <li className={styles.notification_bot}>
          <p>See All Notification</p>
        </li>
      </ul>
    </div>
  );
};

export default Notification;
