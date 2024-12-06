import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
