import React from "react";
import styles from "./index.module.css";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";

const CurrencyConverter = () => {
  return (
    <div>
      <h1 className={styles.CurrencyConverter_h1}>Currency Converter</h1>
      <label htmlFor="">Amount</label>
      <InputField placeholder="Enter Amount" />
      <div className={styles.CurrencyConverter_select}>
        <div>
          <label htmlFor="">From</label>
          <select name="" id="">
            <option value="">USD</option>
            <option value="">INR</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>
        </div>
        <div>
          <label htmlFor="">To</label>
          <select name="" id="">
            <option value="">USD</option>
            <option value="">INR</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>
        </div>
      </div>
      <InputField placeholder="USD" />
      <Button name="Convert" />
    </div>
  );
};

export default CurrencyConverter;
