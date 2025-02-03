import React from "react";
import styles from "./index.module.css";
import InputField from "../../widgets/InputField";
import Button from "../../widgets/Button";
const AddNewCard = ({ onGetAddNewDATA, onclickFn, disabled, state }) => {
  //   state.cardNum,
  //   state.month,
  //   state.year,
  //   state.cvv,
  //   state.cardHolderName,
  //   state.cardType,
  //   state.bankCard
  return (
    <div className={styles.Modal_content}>
      <div className={styles.content_card}></div>
      <h1 className={styles.cart_title}>Add New Card</h1>
      <div>
        <label htmlFor="">Card Number</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          id="cardNum"
          placeholder="0000 0000 0000 0000"
          value={state.cardNum}
        />
      </div>
      <div>
        <label htmlFor="">Month</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="MM"
          id="month"
          value={state.month}
        />
      </div>
      <div>
        <label htmlFor="">Year</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="YY"
          id="year"
          value={state.year}
        />
      </div>
      <div>
        <label htmlFor="">CVV</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="..."
          id="cvv"
          value={state.cvv}
        />
      </div>
      <div>
        <label htmlFor="">Cardholder Name</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="Enter Cardholder's Fill Name"
          id="cardHolderName"
          value={state.cardHolderName}
        />
      </div>
      <div>
        <label htmlFor="">Card Type</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="VISA/RUPAY/ETC"
          id="cardType"
          value={state.cardType}
        />
      </div>
      <div>
        <label htmlFor="">Bank Card</label>
        <InputField
          type="text"
          onChange={onGetAddNewDATA}
          placeholder="AXIS/HDFC/ETC"
          id="bankCard"
          value={state.bankCard}
        />
      </div>
      <div>
        <Button disabled={disabled} onclick={onclickFn} name="Add Card" />
      </div>
    </div>
  );
};

export default AddNewCard;
