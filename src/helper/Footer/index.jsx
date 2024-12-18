import React from "react";
import styles from "./index.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.foots}>
          <p className={styles.foot}>2424 C Influence - Designed by</p>
          <span>
            {/* <img
              src="https://ambankservices.netlify.app/static/media/heart.4001a75f06d3e8524507994328d4c13c.svg"
              alt="icon"
            /> */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
