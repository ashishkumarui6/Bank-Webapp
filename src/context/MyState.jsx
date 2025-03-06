import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [addpayee, setAddPayee] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const uData = JSON.parse(localStorage.getItem("user"));

    if (uData) {
      setUserData(uData);
    }
  }, []);

  const getAddPyaee = (url, uId) => {
    return axios
      .get(url)
      .then((res) => {
        const newaddpayee = [];

        for (const id in res.data) {
          newaddpayee.push({ ...res.data[id], dId: id });
        }

        const filteredData = newaddpayee.filter((it) => it.userId === uId);

        return filteredData;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAddCard = (url, uId) => {
    return axios
      .get(url)
      .then((res) => {
        const newaddCard = [];

        for (const id in res.data) {
          newaddCard.push({ ...res.data[id], dId: id });
        }

        const filteredData = newaddCard.filter((it) => it.userId === uId);

        return filteredData;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        addpayee,
        getAddPyaee,
        getAddCard,
        userData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
