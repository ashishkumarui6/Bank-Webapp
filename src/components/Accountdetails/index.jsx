import React, { useEffect, useState } from "react";
import AcTitle from "../../shared/AcTitile";
import styles from "./index.module.css";

const Accountdetails = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const uData = JSON.parse(localStorage.getItem("user") || []);

    if (uData) {
      setUser(uData);
    }
  }, []);

  return (
    <>
      <div className={styles.Account_details_top}>
        <AcTitle color="#d70026" name="Personal details" />

        <div className={styles.content_details}>
          <div className={styles.details}>
            <p className={styles.details_p}>Full Legal Name</p>
            <h1 className={styles.details_h1}>{user?.name}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Name On Card</p>
            <h1 className={styles.details_h1}>{user?.name}</h1>
          </div>
        </div>
      </div>

      <div className={styles.Account_details_mid_1}>
        <AcTitle color="#d70026" name="Account details" />
        <div className={styles.content_details}>
          <div className={styles.details}>
            <p className={styles.details_p}>Customer ID</p>
            <h1 className={styles.details_h1}>
              {user?.accDetails?.customerID}
            </h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Upi ID</p>
            <h1 className={styles.details_h1}>{user?.accDetails?.upiId}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Branch name</p>
            <h1 className={styles.details_h1}>{user?.accDetails?.branch}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Account Type</p>
            <h1 className={styles.details_h1}>{user?.accDetails?.Type}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Bank Account Number</p>
            <h1 className={styles.details_h1}>{user?.accDetails?.accNumber}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>Account Holder</p>
            <h1 className={styles.details_h1}>{user?.name}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>IFSC Code</p>
            <h1 className={styles.details_h1}>{user?.accDetails?.ifsc}</h1>
          </div>
        </div>
      </div>
      <div className={styles.Account_details_mid_2}>
        <AcTitle color="#d70026" name="Contact details" />
        <div className={styles.content_details}>
          <div className={styles.details}>
            <p className={styles.details_p}>Phone number</p>
            <h1 className={styles.details_h1}>{user?.phone}</h1>
          </div>
          <div className={styles.details}>
            <p className={styles.details_p}>email id</p>
            <h1 className={styles.details_h1}>{user?.email}</h1>
          </div>
        </div>
      </div>
      <div className={styles.Account_details_bottom}>
        <AcTitle color="#d70026" name="Employment details" />
        <div className={styles.content_details}>
          <div className={styles.details}>
            <p className={styles.details_p}>employment type</p>
            <h1 className={styles.details_h1}>{user?.work}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accountdetails;
