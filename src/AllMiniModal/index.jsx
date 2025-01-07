import React from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui";

const AllMiniModal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(uiActions.onModalOpen({ name: "" }));
      }}
      className={styles.allMiniModal}
    >
      <div className={styles.allMiniModal_container}>
        <div className={styles.cotainer_box}>{children}</div>
      </div>
    </div>
  );
};

export default AllMiniModal;
