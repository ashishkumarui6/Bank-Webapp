import React from "react";
import MyContext from "./myContext";

const MyState = ({ children }) => {
  let name = "vivek";
  return <MyContext.Provider value={{ name }}>{children}</MyContext.Provider>;
};

export default MyState;
