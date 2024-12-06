import React from "react";
import styles from "./index.module.css";
import { FaUser } from "react-icons/fa";

const InputField = ({ type, placeholder, required, disabled }) => {
  return (
    <div className={styles.InputField}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <FaUser />
    </div>
  );
};

export default InputField;
