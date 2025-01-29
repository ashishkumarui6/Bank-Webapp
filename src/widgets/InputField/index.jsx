import React from "react";
import styles from "./index.module.css";
import { FaUser } from "react-icons/fa";

const InputField = ({
  id,
  type,
  placeholder,
  required,
  disabled,
  onChange,
  icon,
  value,
}) => {
  return (
    <div className={styles.InputField}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
        id={id}
        value={value}
      />
      {icon}
    </div>
  );
};

export default InputField;
