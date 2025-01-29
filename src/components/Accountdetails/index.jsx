import React, { useContext } from "react";
import AcTitle from "../../shared/AcTitile";
import styles from "./index.module.css";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";

const Accountdetails = () => {
  const ctx = useContext(MyContext);

  const { copydata, loading } = ctx;

  console.log(copydata, "11");
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.Account_details_top}>
            <AcTitle color="#d70026" name="Personal details" />

            <div className={styles.content_details}>
              <div className={styles.details}>
                <p className={styles.details_p}>Full Legal Name</p>
                <h1 className={styles.details_h1}>{copydata[0]?.name}</h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Name On Card</p>
                <h1 className={styles.details_h1}>{copydata[0]?.name}</h1>
              </div>
            </div>
          </div>

          <div className={styles.Account_details_mid_1}>
            <AcTitle color="#d70026" name="Account details" />
            <div className={styles.content_details}>
              <div className={styles.details}>
                <p className={styles.details_p}>Customer ID</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.customerID}
                </h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Upi ID</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.upiId}
                </h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Branch name</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.branch}
                </h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Account Type</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.Type}
                </h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Bank Account Number</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.accNumber}
                </h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>Account Holder</p>
                <h1 className={styles.details_h1}>{copydata[0]?.name}</h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>IFSC Code</p>
                <h1 className={styles.details_h1}>
                  {copydata[0]?.accDetails.ifsc}
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.Account_details_mid_2}>
            <AcTitle color="#d70026" name="Contact details" />
            <div className={styles.content_details}>
              <div className={styles.details}>
                <p className={styles.details_p}>Phone number</p>
                <h1 className={styles.details_h1}>{copydata[0]?.phone}</h1>
              </div>
              <div className={styles.details}>
                <p className={styles.details_p}>email id</p>
                <h1 className={styles.details_h1}>{copydata[0]?.email}</h1>
              </div>
            </div>
          </div>
          <div className={styles.Account_details_bottom}>
            <AcTitle color="#d70026" name="Employment details" />
            <div className={styles.content_details}>
              <div className={styles.details}>
                <p className={styles.details_p}>employment type</p>
                <h1 className={styles.details_h1}>{copydata[0]?.work}</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Accountdetails;
