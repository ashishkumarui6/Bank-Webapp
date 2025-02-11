import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/registration/SignUp";
import Login from "./pages/registration/Login";
import Main from "./pages/Main";
import SavingAC from "./pages/SavingAC";
import QrCode from "./pages/QrCode";
import Pay from "./pages/Pay";
import AddMoney from "./pages/AddMoney";
import ACdetails from "./pages/ACdetails";
import CardSetting from "./pages/CardSetting";
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
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </MyState>
      </Suspense>
    </>
  );
};

export default App;
