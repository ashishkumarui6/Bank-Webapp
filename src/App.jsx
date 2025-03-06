import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const ERROR = lazy(() => import("./pages/ERROR"));
const SignUp = lazy(() => import("./pages/registration/SignUp"));
const Login = lazy(() => import("./pages/registration/Login"));
const Main = lazy(() => import("./pages/Main"));
const SavingAC = lazy(() => import("./pages/SavingAC"));
const QrCode = lazy(() => import("./pages/QrCode"));
const Pay = lazy(() => import("./pages/Pay"));
const AddMoney = lazy(() => import("./pages/AddMoney"));
const ACdetails = lazy(() => import("./pages/ACdetails"));
const CardSetting = lazy(() => import("./pages/CardSetting"));
const CurrencyConverter = lazy(() => import("./pages/CurrencyConverter"));
const History = lazy(() => import("./pages/History"));
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";
import MyState from "./context/MyState";
const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <MyState>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Main element={<SavingAC />} />} />
            <Route path="/qr" element={<Main element={<QrCode />} />} />
            <Route path="/pay" element={<Main element={<Pay />} />} />
            <Route path="/addmoney" element={<Main element={<AddMoney />} />} />
            <Route
              path="/acdetails"
              element={<Main element={<ACdetails />} />}
            />
            <Route
              path="/cardsetting"
              element={<Main element={<CardSetting />} />}
            />
            <Route
              path="/currencyconvertor"
              element={<Main element={<CurrencyConverter />} />}
            />
            <Route path="/history" element={<Main element={<History />} />} />
            <Route path="/*" element={<ERROR />} />
          </Routes>
          <ToastContainer />
        </MyState>
      </Suspense>
    </>
  );
};

export default App;
