import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Layout from "../../ui/layout";
import AsideMenu from "../../helper/AsideMenu";
import { Navigate, useLocation } from "react-router-dom";

const Main = ({ element }) => {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const toggle = () => {
    setShow(!show);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      {show && <AsideMenu toggle={toggle} />}
      <Layout toggle={toggle}>
        <div className={styles.Root_root}>{element}</div>
      </Layout>
    </>
  );
};

export default Main;
