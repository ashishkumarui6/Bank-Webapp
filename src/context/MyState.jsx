import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [copydata, setCopyData] = useState([]);
  const [addpayee, setAddPayee] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const uData = JSON.parse(localStorage.getItem("user"));

    if (uData) {
      setUserData(uData);
    }
  }, []);

  const getCopyData = () => {
    setLoading(true);
    axios
      .get("https://bank-webapp-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        const newAddData = [];

        for (const id in res.data) {
          newAddData.push({ ...res.data[id], dId: id });
        }
        setCopyData(newAddData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getAddPyaee = () => {
  //   setLoading(true);
  //   axios
  //     .get("https://bank-webapp-default-rtdb.firebaseio.com/addpyee.json")
  //     .then((res) => {
  //       const newaddpayee = [];

  //       for (const id in res.data) {
  //         newaddpayee.push({ ...res.data[id], dId: id });
  //       }

  //       const filteredData = newaddpayee.filter(
  //         (it) => it.userId === userData.dId
  //       );

  //       setAddPayee(filteredData);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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

  useEffect(() => {
    getCopyData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        copydata,
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
