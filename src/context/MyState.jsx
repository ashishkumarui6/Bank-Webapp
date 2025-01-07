import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";

const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [copydata, setCopyData] = useState([]);

  const getCopyData = () => {
    axios
      .get("https://bank-app-652c0-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        const newAddData = [];

        for (const id in res.data) {
          newAddData.push({ ...res.data[id], dId: id });
        }
        setCopyData(newAddData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCopyData();
  }, []);
  return (
    <MyContext.Provider value={{ loading, setLoading, copydata }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
