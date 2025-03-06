import React from "react";
import styles from "./index.module.css";
import { appbox } from "../../../data/Appbox";
import AppIcon from "../../../widgets/AppIcon";

const Page_6 = ({ onChange, onSelectPayMethod, app, platform }) => {
  return (
    <>
      <div className={styles.funds}>
        <div className={styles.fundsTitle}>
          <h2>funds to add</h2>
        </div>
        <div className={styles.fundsInput}>
          <p>₹</p>
          <input id="balance" type="text" onChange={onChange} />
        </div>
        <div className={styles.selectUpi_optoins}>
          <h1>Select UPI App</h1>
          <div className={styles.selectUpi_optoin}>
            {appbox.map((it) => (
              <AppIcon
                platform={platform}
                app={app}
                onClick={onSelectPayMethod}
                key={it.id}
                name={it.name}
                img={it.img}
                title={it.title}
              />
            ))}
          </div>
        </div>
        <ul className={styles.circulTab}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className={styles.circulTab_li_active}></li>
        </ul>
      </div>
    </>
  );
};

export default Page_6;
