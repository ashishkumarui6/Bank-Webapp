import React from "react";
import Header from "../../helper/Header";
import Footer from "../../helper/Footer";

const Layout = ({ children, toggle }) => {
  return (
    <div>
      <Header toggle={toggle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
